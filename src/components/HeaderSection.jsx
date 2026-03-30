import LastUpdated from './LastUpdated'
import PeriodSelector from './PeriodSelector'

const HeaderSection = () => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 24px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '32px',
        gap: '24px'
      }}>
        {/* Left: Title block */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#eef2ff', fontFamily: 'Syne, sans-serif', marginBottom: '12px' }}>
            ADI Chain Intelligence Dashboard
          </h1>
          <p style={{ fontSize: '13px', color: '#7a8fad', fontFamily: 'Inter, sans-serif', lineHeight: '1.5', maxWidth: '600px', marginBottom: '12px' }}>
            A real-time analytics layer for ADI Chain — tracking network activity, token metrics, and ecosystem growth since mainnet launch.
          </p>
          <p style={{ fontSize: '12px', color: '#7a8fad', fontFamily: 'Inter, sans-serif' }}>
            Data Sources: CoinGecko · ADI Block Explorer · ADI RPC
          </p>
        </div>

        {/* Right: Last Updated + Period Selector */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
          flexShrink: 0
        }}>
          <LastUpdated />
          <PeriodSelector />
        </div>
      </div>
    </div>
  )
}

export default HeaderSection