/**
 * 1 - primeiro bloco Gutenberg com ES5
 */

( function( blocks, element ) {
	var el = element.createElement;

	// criando estilo para nosso editor
	var blockStyle = {
		backgroundColor: 'green',
		color: 'white',
    padding: '2em',
    border: '3px solid black'
	};

//criando estilo para nosso front-end
	var blockStyleFront = {
		backgroundColor: 'blue',
		color: 'white',
    padding: '2em',
    border: '3px solid black'
	};

	blocks.registerBlockType( 'fellyph/tutorial-01', {
		title: 'Primeiro bloco Gutenberg',
		icon: 'universal-access-alt',
    category: 'layout',
  
		edit: function() {
			return el(
				'p',
				{ style: blockStyle },
				'Este conteúdo será exibido no editor.'
			);
		},
		save: function() {
			return el(
				'p',
				{ style: blockStyleFront },
				'Este conteúdo será exibido para o usuário final.'
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.element
) );
