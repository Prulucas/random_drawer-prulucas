import { useState } from 'react';
import NameDrawer from './components/NameDrawer';
import NumberDrawer from './components/NumberDrawer';

function App() {
  const [aba, setAba] = useState('nomes');

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f8fafc', // Fundo sutil para destacar os cards
      fontFamily: 'sans-serif',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ color: '#1e293b', marginBottom: '24px', fontSize: '32px' }}>App de Sorteios</h1>
      
      {/* Botões de Navegação Pequenos e Alinhados */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button 
          onClick={() => setAba('nomes')}
          style={{ 
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '20px', // Estilo pílula bem moderno
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            backgroundColor: aba === 'nomes' ? '#4c51bf' : '#e2e8f0', 
            color: aba === 'nomes' ? 'white' : '#475569',
          }}
        >
          Sortear Nomes
        </button>
        <button 
          onClick={() => setAba('numeros')}
          style={{ 
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            backgroundColor: aba === 'numeros' ? '#4c51bf' : '#e2e8f0', 
            color: aba === 'numeros' ? 'white' : '#475569',
          }}
        >
          Sortear Números
        </button>
      </div> 

      {/* Container fixo e centralizado para os sorteadores */}
      <div style={{ width: '100%', maxWidth: '480px' }}>
        {aba === 'nomes' ? <NameDrawer /> : <NumberDrawer />}
      </div>
          <footer style={{
            width: '100%',
            textAlign: 'center',
            padding: '20px 0',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            color: '#94a3b8',
            fontSize: '24px',
            fontWeight: '500'
          }}>
            &copy; Desenvolvido por Prulucas
          </footer>
    </div>

  );
}

export default App;