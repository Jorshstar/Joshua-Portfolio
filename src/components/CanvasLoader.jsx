import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()

  return (
    <Html 
    as='div' 
    center 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '10px',
    }}
    position={[0, 0, 0]}>
      <span className='canvas-loader'/>

      <p style={{
        fontSize: '14px',
        color: '#f1f1f1',
        fontWeight: 800,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        marginTop: 40
        
      }} >
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
     
     </Html>
  )
}

export default CanvasLoader