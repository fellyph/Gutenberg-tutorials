/**
 * 1 - Criando primeiro bloco Gutenberg com ES5: parte 03
 * 	-	 carregando atributos com BlockControls
 */
( function( blocks, element, editor ) {
	var el = element.createElement,
			RichText = editor.RichText,
			AlignmentToolbar = editor.AlignmentToolbar,
			BlockControls = editor.BlockControls;

	//registrando nosso bloco
	blocks.registerBlockType( 'fellyph/tutorial-03-alinhamento', {
		title: 'Bloco com controle de alinhamento',
		icon: 'welcome-view-site',
		category: 'layout',
		
		//registrando os atributos que iremos trabalhar
		attributes: {
			content: {
				type: 'string',
				source: 'html',
				selector: 'p'
			},
			alinhamento: {
				type: 'string',
				default: 'none'
			},
		},
		
		// unção responsável por exibir nosso bloco no editor
		edit: function(props) {
			var content = props.attributes.content;
			var alinhamento = props.attributes.alinhamento;

			// função responsável por acompanhar as mudanças do nosso atributo
			function onChangeContent( newContent ) {
					props.setAttributes( { content: newContent } );
			}

			function onChangeAlignment (nextAlign ) {
				props.setAttributes( { alinhamento: nextAlign } );
			}

			// agora retornamos um array por que estamos utilizando dois componentes
			return [
				el( BlockControls, 
					{ key: 'controls' },
					el( AlignmentToolbar, {
							value: alinhamento,
							onChange: onChangeAlignment
					})
        ),
				el(
					RichText,
					{
						key: 'richtext',
						tagName: 'p',
						style: { textAlign: alinhamento },
						className: props.className,
						onChange: onChangeContent,
						value: content,
						placeholder: 'Insira seu nome aqui'
					}
			),
			];
		},

		save: function(props) {

			return el(
				RichText.Content , {
					tagName: 'p',
					className: props.className,
					style: { textAlign: props.attributes.alinhamento },
					value: props.attributes.content,
				}
			);
		},
	});
}(
	window.wp.blocks,
	window.wp.element,
	window.wp.editor
) );
