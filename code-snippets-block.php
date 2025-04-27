<?php
/**
 * Plugin Name: Code Snippets Block
 * Description: The Code Snippets block plugin lets you easily copy, style, and view beautifully highlighted code.
 * Version: 1.0.2
 * Author: bPlugins
 * Author URI: http://bplugins.com
 * Requires at least: 6.5
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: code-snippets-block
 */

// ABS PATH
if (!defined('ABSPATH')) {exit;}

// Constant
define( 'CSBCH_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.2' );
define('CSBCH_ASSETS_DIR', plugin_dir_url(__FILE__) . 'assets/');

// Hightlight-Code
class CSBCH_B_blocksCodeHighLight
{
    public function __construct()
    {
        add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
        add_action('init', [$this, 'onInit']);
    }

    public function enqueueBlockAssets()
    {
        wp_register_style('codeMirror', CSBCH_ASSETS_DIR . 'css/codeMirror.min.css', [], CSBCH_PLUGIN_VERSION);
        wp_register_style('csbch-codeHighLight-style', plugins_url('dist/style.css', __FILE__), ['codeMirror'], CSBCH_PLUGIN_VERSION);

        wp_register_script('highlight', CSBCH_ASSETS_DIR . 'js/highlight.min.js', [], CSBCH_PLUGIN_VERSION);
        wp_register_script('highlightgo', CSBCH_ASSETS_DIR . 'js/highlightgo.js', [], CSBCH_PLUGIN_VERSION);
        wp_register_script('highlightlinenumber', CSBCH_ASSETS_DIR . 'js/highlightlinenumber.js', [], CSBCH_PLUGIN_VERSION);
        wp_register_script('codeMirror', CSBCH_ASSETS_DIR . 'js/codeMirror.min.js', [], CSBCH_PLUGIN_VERSION);

        wp_register_script('csbch-codeHighLight-script', plugins_url('dist/script.js', __FILE__), ['react', 'react-dom', 'highlight', 'highlightgo', 'highlightlinenumber', 'codeMirror'], CSBCH_PLUGIN_VERSION);
    }

    public function onInit()
    {
        wp_register_style('bch-code-highlight-editor-style', plugins_url('dist/editor.css', __FILE__), ['wp-edit-blocks', 'csbch-codeHighLight-style'], CSBCH_PLUGIN_VERSION); // Backend Style

        register_block_type(__DIR__, [
            'editor_style' => 'bch-code-highlight-editor-style',
            'render_callback' => [$this, 'render'],
        ]); // Register Block

        wp_set_script_translations('bch-code-highlight-editor-script', 'code-snippets-block', plugin_dir_path(__FILE__) . 'languages'); // Translate
    }

    public function render($attributes)
    {
        extract($attributes);

        $className = $className ?? '';
        $bchBlockClassName = 'wp-block-bch-code-highlight ' . $className . ' align' . $align;
        wp_enqueue_style('csbch-codeHighLight-style');
        wp_enqueue_script('csbch-codeHighLight-script');

        ob_start();?>
		<div class='<?php echo esc_attr($bchBlockClassName); ?>' id='bhcCodeHighlight-<?php echo esc_attr($cId) ?>' data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

		<?php return ob_get_clean();
    } // Render
}
new CSBCH_B_blocksCodeHighLight();