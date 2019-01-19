<?php

/**
 * Plugin Name: Gutenberg tutorial
 * Plugin URI: https://github.com/fellyph/Gutenberg-tutorials
 * Description: this tutorial shows how to create your first Gutenberg block.
 * Version: 1.0
 * Author: fellyph
 */

defined( 'ABSPATH' ) || exit;

/**
 * 1 - Criando nosso primeiro bloco
 *    1.1 - precisamos registrar nosso script para ser adicionado na função register_block
 *    1.2 - registramos nosso block type passando nosso script
 */
function meu_primeiro_bloco_gutenberg () {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Checamos se temos suporte a função register_block_type antes de tudo.
		return;
	}

	wp_register_script(
		'tutorial-gutenberg-01',
		plugins_url( 'primeiro-bloco.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'primeiro-bloco.js' )
	);

	register_block_type( 'fellyph/tutorial-01', array(
		'editor_script' => 'tutorial-gutenberg-01',
	) );
}

add_action( 'init', 'meu_primeiro_bloco_gutenberg' );
