<?php
/**
 * Plugin Name: Code-Highlight
 * Description: Easily elevate code readability with our streamlined highlighting plugin!.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: code-highlight
 */

// ABS PATH
if (!defined('ABSPATH')) {exit;}

// Constant
if ('localhost' === $_SERVER['HTTP_HOST']) {
    $plugin_version = time();
} else {
    $plugin_version = '1.0.0';

}
define('BCH_PLUGIN_VERSION', $plugin_version);

// define('BCH_PLUGIN_VERSION', 'localhost' === $_SERVER['HTTP_HOST']  time() : '1.0.0');
define('BCH_ASSETS_DIR', plugin_dir_url(__FILE__) . 'assets/');

// Hightlight-Code
class BCH_B_blocksCodeHighLight
{
    public function __construct()
    {
        add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
        add_action('init', [$this, 'onInit']);
    }

    public function enqueueBlockAssets()
    {
        wp_register_style('codeMirror', BCH_ASSETS_DIR . 'css/codeMirror.min.css', [], BCH_PLUGIN_VERSION);
        wp_register_style('bch-codeHighLight-style', plugins_url('dist/style.css', __FILE__), ['codeMirror'], BCH_PLUGIN_VERSION);

        wp_register_script('highlight', BCH_ASSETS_DIR . 'js/highlight.min.js', [], BCH_PLUGIN_VERSION);
        wp_register_script('highlightgo', BCH_ASSETS_DIR . 'js/highlightgo.js', [], BCH_PLUGIN_VERSION);
        wp_register_script('highlightlinenumber', BCH_ASSETS_DIR . 'js/highlightlinenumber.js', [], BCH_PLUGIN_VERSION);
        wp_register_script('codeMirror', BCH_ASSETS_DIR . 'js/codeMirror.min.js', [], BCH_PLUGIN_VERSION);

        wp_register_script('bch-codeHighLight-script', plugins_url('dist/script.js', __FILE__), ['react', 'react-dom', 'highlight', 'highlightgo', 'highlightlinenumber', 'codeMirror'], BCH_PLUGIN_VERSION);
    }

    public function onInit()
    {
        wp_register_style('bch-code-highlight-editor-style', plugins_url('dist/editor.css', __FILE__), ['wp-edit-blocks', 'bch-codeHighLight-style'], BCH_PLUGIN_VERSION); // Backend Style

        register_block_type(__DIR__, [
            'editor_style' => 'bch-code-highlight-editor-style',
            'render_callback' => [$this, 'render'],
        ]); // Register Block

        wp_set_script_translations('bch-code-highlight-editor-script', 'code-highlight', plugin_dir_path(__FILE__) . 'languages'); // Translate
    }

    public function render($attributes)
    {
        extract($attributes);

        $className = $className ?? '';
        $bchBlockClassName = 'wp-block-bch-code-highlight ' . $className . ' align' . $align;
        wp_enqueue_style('bch-codeHighLight-style');
        wp_enqueue_script('bch-codeHighLight-script');

        ob_start();?>
		<div class='<?php echo esc_attr($bchBlockClassName); ?>' id='bhcCodeHighlight-<?php echo esc_attr($cId) ?>' data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

		<?php return ob_get_clean();
    } // Render
}
new BCH_B_blocksCodeHighLight();