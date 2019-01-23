<?php

/**
 * Plugin Name: Gutenberg tutorial
 * Plugin URI: https://github.com/fellyph/gutenberg-tutorials
 * Description: Este tutorial ensina como criar um bloco gutenberg https://blog.fellyph.com.br/wordpress-2/criando-seu-proprio-bloco-gutenberg/.
 * Version: 1.3
 * Author: fellyph
 */

defined( 'ABSPATH' ) || exit;

/**
 * 1 - Criando nosso primeiro bloco: Parte 03
 *    1.1 - Adicionado o recurso de cadastrar atributos
 */
function meu_primeiro_bloco_gutenberg_parte_03 () {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Checamos se temos suporte a função register_block_type antes de tudo.
		return;
	}

	wp_register_script(
		'tutorial-03',
		plugins_url( 'script.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'script.js' )
	);

	wp_register_style(
		'style-editor',
		plugins_url( 'editor-style.css', __FILE__ ),
		array('wp-edit-blocks'),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor-style.css' )
	);

	wp_register_style(
		'style-frontend',
		plugins_url( 'style.css', __FILE__ ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'fellyph/tutorial-03', array(
		'style' => 'style-frontend',
		'editor_script' => 'tutorial-03',
		'editor_style' => 'style-editor'
	) );
}

add_action( 'init', 'meu_primeiro_bloco_gutenberg_parte_03' );