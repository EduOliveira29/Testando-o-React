import {fireEvent, render, screen } from '@testing-library/react';
import Post from '../../../App'
import PostComment from '../index'

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument();
    });
});

describe('Teste para os insersão de comentarios', () => {
    test('Deve retornar o valor digitado', () =>  {
        const { debug } = render(<PostComment  />);

        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Primeiro comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getByText('Primeiro comentario')).toBeInTheDocument()
        
        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Segundo comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getByText('Segundo comentario')).toBeInTheDocument()
    });
});
