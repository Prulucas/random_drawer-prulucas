import { useState } from 'react';
import api from '../api';

export default function NameDrawer() {
  const [text, setText] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSortear = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('api/namedrawer/', { text: text });
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao sortear nome:", error);
      alert("Erro ao conectar com a API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '24px', 
      backgroundColor: '#ffffff', 
      borderRadius: '16px', 
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)'
    }}>
      <h2 style={{ textAlign: 'center', margin: '0 0 6px 0', color: '#1e293b', fontSize: '22px' }}>Sorteador de Nomes</h2>
      <p style={{ textAlign: 'center', color: '#64748b', margin: '0 0 20px 0', fontSize: '14px' }}>
        Digite os nomes separados por vírgula:
      </p>

      <form onSubmit={handleSortear} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <textarea
          rows="4"
          style={{ 
            width: '100%', 
            padding: '12px', 
            borderRadius: '8px', 
            border: '1px solid #cbd5e1', 
            fontSize: '15px',
            fontFamily: 'sans-serif',
            boxSizing: 'border-box',
            resize: 'none',
            outline: 'none',
            backgroundColor: '#f8fafc',
            color: '#334155'
          }}
          placeholder="João, Maria, Pedro, Ana"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            width: '100%',
            padding: '12px', 
            fontSize: '15px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#10b981', 
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)',
          }}
        >
          {loading ? 'Sorteando...' : 'Sortear Nome'}
        </button>
      </form>

      {resultado && (
        <div style={{ 
          marginTop: '20px', 
          backgroundColor: '#f0fdf4', 
          border: '1px solid #bbf7d0', 
          padding: '16px', 
          borderRadius: '8px', 
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 4px 0', color: '#166534', fontSize: '14px' }}>🎉 Nome Sorteado:</h3>
          <p style={{ margin: '0', fontSize: '26px', fontWeight: '700', color: '#15803d' }}>
            {resultado.sorteado}
          </p>
        </div>
      )}
    </div>
  );
}