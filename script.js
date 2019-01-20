/**
 * 1 - primeiro bloco Gutenberg com ES5
 */
( function( blocks, element ) {
	var el = element.createElement;


	blocks.registerBlockType( 'fellyph/tutorial-02', {
		title: 'Primeiro bloco Gutenberg: Parte 02',
		icon: 'smiley',
    category: 'layout',
  
		edit: function(props) {
			return el(
				'p',
				{ className: props.className },
				'Este conteúdo será exibido no editor.'
			);
		},
		save: function(props) {
			return el(
				'p',
				{ className: props.className },
				'Este conteúdo será exibido para o usuário final.'
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.element
) );
