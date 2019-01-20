<?php

/**
 * Plugin Name: Gutenberg tutorial
 * Plugin URI: https://github.com/fellyph/Gutenberg-tutorials
 * Description: Este tutorial ensina como criar um bloco gutenberg https://blog.fellyph.com.br/wordpress-2/criando-seu-proprio-bloco-gutenberg/.
 * Version: 1.2
 * Author: fellyph
 */

defined( 'ABSPATH' ) || exit;

/**
 * 1 - Criando nosso primeiro bloco: Parte 02
 *    1.1 - Carregando arquivo externo para nosso estilo
 */
function meu_primeiro_bloco_gutenberg_parte_02 () {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Checamos se temos suporte a função register_block_type antes de tudo.
		return;
	}

	wp_register_script(
		'tutorial-02',
		plugins_url( 'primeiro-bloco.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'primeiro-bloco.js' )
	);

	wp_register_style(
		'style-tutorial-02',
		plugins_url( 'style.css', __FILE__ ),
		array('wp-edit-blocks'),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'fellyph/tutorial-02', array(
		'editor_script' => 'tutorial-02',
		'editor_style' => 'style-tutorial-02'
	) );
}

add_action( 'init', 'meu_primeiro_bloco_gutenberg_parte_02' );