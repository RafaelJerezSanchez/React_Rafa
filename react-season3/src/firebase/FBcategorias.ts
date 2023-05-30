import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { nanoid } from 'nanoid'
import firebaseConfig from "./config/firebaseConfig";
import { ICategoria } from "../interfaces/ICategoria";
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()

export const getCategorias = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; //array inicializado al vacio
    // const categoriasRef = collection(useFirestore(), "Categorias") //seleccionamos la coleccion categorias
    const categoriasRef = collection(db, "Tipofuego"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}

export const getCategoriasagua = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; //array inicializado al vacio
    // const categoriasRef = collection(useFirestore(), "Categorias") //seleccionamos la coleccion categorias
    const categoriasRef = collection(db, "Tipoagua"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}

export const getCategoriaslucha = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; //array inicializado al vacio
    // const categoriasRef = collection(useFirestore(), "Categorias") //seleccionamos la coleccion categorias
    const categoriasRef = collection(db, "Tipolucha"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}