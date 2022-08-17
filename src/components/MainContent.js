import data from '../data'
import Card from './Card'

function MainContent() {

    //console.log(data);
    const cardElements = data.map((v)=>{
        return <Card key={v.id} {...v}/>
    })

    return (
        <main className="main-content">
            {cardElements}
        </main>
        
    )
}

export default MainContent