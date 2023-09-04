import './Rodape.css';

function Rodape({item0, item1, item2, item3, item4, item5, item6, item7}){
    return (

        <div className='rodape'>

            <div className='rodape-column-1'>
                <div className='titulo-1'>
                    {item0}
                </div>

                <div className='itens-1'>
                    <p>{item1}</p>
                    <p>{item2}</p>
                    <p>{item3}</p>
                </div>
            </div>

            <div className='rodape-column-2'>
                <div className='titulo-2'>
                    {item4}
                </div>

                <div className='itens-2'>
                    <p>{item5}</p>
                    <p>{item6}</p>
                </div>
            </div>

        </div>
    )
}

export default Rodape;