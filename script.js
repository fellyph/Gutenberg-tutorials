/**
 * 1 - primeiro bloco Gutenberg com ES5: parte 02
 * 	-	 carregando style externo
 */
( function( blocks, element ) {
	var el = element.createElement;

	blocks.registerBlockType( 'fellyph/tutorial-02', {
		title: 'Primeiro bloco Gutenberg: Parte 02',
		icon: 'smiley',
    category: 'layout',
  
		edit: function(props) {
			var test = 'Este conteúdo será exibido no editor. / ';
			for(var key in props) {
				 test += key + " : " + props[key] + ' / ';
			}

			return el(
				'p',
				{ className: props.className },
				test
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
