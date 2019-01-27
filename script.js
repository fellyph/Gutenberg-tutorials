/**
 * 1 - Criando primeiro bloco Gutenberg com ES5: parte 04
 * 	-	 internacionalizacao de blocos
 */
( function( blocks, element, editor, i18n ) {
	var el = element.createElement,
			RichText = editor.RichText;

	//registrando nosso bloco
	blocks.registerBlockType( 'fellyph/tutorial-03', {
		title: i18n.__('Bloco com cadastro de atributo', 'fellyph'),
		icon: 'smiley',
		category: 'layout',
		keywords: [
			i18n.__('Tutorial', 'fellyph'),
			i18n.__('Cadastro', 'fellyph'),
			i18n.__('Dinâmico', 'fellyph')
		],
		
		//registrando o tipo de bloco que iremos trabalhar
		attributes: {
			content: {
				type: 'string',
				source: 'html',
				selector: 'p',
			}
		},
		
		// função responsável por exibir nosso bloco no editor
		edit: function(props) {
			var content = props.attributes.content;

			// função responsável por acompanhar as mudanças do nosso atributo
			function onChangeContent( newContent ) {
					props.setAttributes( { content: newContent } );
			}
			
			// agora retornamos um elemento RichText ao invés de um parâgrafo
			return el(
					RichText,
					{
							tagName: 'p',
							className: props.className,
							onChange: onChangeContent,
							placeholder: i18n.__('Insira texto aqui', 'fellyph'),
							value: content,
					}
			);
		},

		save: function(props) {
			return el(
				RichText.Content , {
					tagName: 'p',
					className: props.className,
					value: props.attributes.content,
				}
			);
		},
	});
}(
	window.wp.blocks,
	window.wp.element,
	window.wp.editor,
	window.wp.i18n
) );
