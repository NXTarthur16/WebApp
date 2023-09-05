import './Rodape.css';

function Rodape({item0, item1, item2, item3}){
    return (

        <div className='rodape'>
            <div className='rodape-column'>
                <div className='titulo'>
                    {item0}
                </div>
                <div className='itens'>
                    <p>{item1}</p>
                    <p>{item2}</p>
                    <p>{item3}</p>
                </div>
            </div>
        </div>
    )
}

export default Rodape;