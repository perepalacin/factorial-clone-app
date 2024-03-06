import { TowerControlIcon } from 'lucide-react';

const Absenses = () => {
    const data = [];
    
    if (data.length === 0) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TowerControlIcon width={24} height={24} className='secondary-text'/>
                <p
                    style={{
                        fontSize: "0.85rem",
                        fontWeight: "500",
                    }}
                    className="secondary-text"    
                    >No absences coming up in your team
                </p>
                <button className='muted-button'>
                    View calendar
                </button>
            </div>
        )
    }
  return (
    <div>

    </div>
  )
}

export default Absenses