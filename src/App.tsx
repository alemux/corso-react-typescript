import React from 'react';
import css from './App.module.css';


interface Prodotto {
  id: number;
  nome?: string;
  data_caricamento: string;
  prezzo: number;
  descrizione?: string;
}

function Noproducts() {
  return (
    <div>
      <h1>Nessun prodotto</h1>
    </div>
  );
}





function App() {

  const [prodotti, setProdotti] = React.useState<Prodotto[]>([]);

  // define function addProduct
  const addProduct = (nome: string, data_caricamento: string, prezzo: number, descrizione: string) => {
    nome = nome || "Prodotto " + prodotti.length;
    data_caricamento = data_caricamento || "2020-01-01";
    prezzo = prezzo || 100;
    descrizione = descrizione || "Descrizione prodotto " + prodotti.length;

    console.log("Aggiungo prodotto d", prodotti);

    let productToAdd = {
      id: prodotti.length + 1,  
      nome: nome + " " + prodotti.length,
      data_caricamento: data_caricamento,
      prezzo: prezzo,
      descrizione: descrizione
    }
    
    // add a mock product to prodotti array
    setProdotti([...prodotti, productToAdd]);
    
  }

  const deleteProduct = (id: number) => {
    console.log("Elimino prodotto con id", id);
    setProdotti(prodotti.filter(prodotto => prodotto.id !== id));
  }

  function Products(props: {  prodotti: Prodotto[] }) {
    return (
      <div>
        <h1>Prodotti</h1>
        <ul>
          {props.prodotti.map(prodotto => (
            <li key={prodotto.id} className={css.prodottiItem}>
              <h2>{prodotto.nome}</h2>
              <p>{prodotto.data_caricamento}</p>
              <p>{prodotto.prezzo}</p>
              <p>{prodotto.descrizione}</p>
              <div>
                <button onClick={() => deleteProduct(prodotto.id)} className={css.prodottiBtnDelete}>
                  Elimina
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>      
      <main className="p-10">
        <h1 className="text-3xl font-bold underline titolo">
          Elenco facile prodotti {prodotti.length !== 0 && <span className="text-green-500">{prodotti.length}</span>}
        </h1>
        

      <div>
        <h2 className={css.titolo}>Prodotti</h2>
        {prodotti.length === 0 ? <Noproducts /> : <Products prodotti={prodotti}  />}
      </div>

      <div>
        <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-800" type='button' onClick={() => addProduct('Scatola di merendine', '2022/02/18', 25.96, "Fantastico prodotto")}>Inserisci prodotto</button>
      </div>


      </main>
    </div>
  );
}

export default App;
