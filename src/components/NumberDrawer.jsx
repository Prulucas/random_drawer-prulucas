import { useState } from 'react';
import api from '../api';

export default function NumberDrawer() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSortear = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('api/numberdrawer/', { n1: n1, n2: n2 });
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao sortear número:", error);
      alert("Erro ao conectar com a API.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    outline: 'none',
    backgroundColor: '#f8fafc',
    color: '#334155',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s'
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#4c51bf';
    e.target.style.boxShadow = '0 0 0 3px rgba(76, 81, 191, 0.15)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#cbd5e1';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={{ 
      padding: '24px', 
      backgroundColor: '#ffffff', 
      borderRadius: '16px', 
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)'
    }}>
      <h2 style={{ textAlign: 'center', margin: '0 0 6px 0', color: '#1e293b', fontSize: '22px' }}>Sorteador de Números</h2>
      <p style={{ textAlign: 'center', color: '#64748b', margin: '0 0 24px 0', fontSize: '14px' }}>
        Digite um intervalo de números para sortear:
      </p>

      <form onSubmit={handleSortear} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>Primeiro Número:</label>
          <input
            type="number"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={n1}
            onChange={(e) => setN1(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#475569' }}>Segundo Número:</label>
          <input
            type="number"
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={n2}
            onChange={(e) => setN2(e.target.value)}
            required
          />
        </div>
        
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
            marginTop: '8px'
          }}
        >
          {loading ? 'Sorteando...' : 'Sortear Número'}
        </button>
      </form>

      {resultado && (
        <div style={{ 
          marginTop: '24px', 
          backgroundColor: '#fffaf0', // Tom leve de laranja/amarelo para diferenciar do de nomes
          border: '1px solid #feebc8', 
          padding: '16px', 
          borderRadius: '8px', 
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 4px 0', color: '#c05621', fontSize: '14px' }}>🎉 Número Sorteado:</h3>
          <p style={{ margin: '0', fontSize: '32px', fontWeight: '800', color: '#dd6b20' }}>
            {resultado.sorteado}
          </p>
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#7b341e', opacity: 0.8 }}>
            Intervalo considerado: entre {resultado.menor_intervalo} e {resultado.maior_intervalo}
          </p>
        </div>
      )}
    </div>
  );
}