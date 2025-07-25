import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Report() {
  const [categories, setCategories] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("https://www.hs-service.api.crealape.com/api/v1/categories");
      setCategories(res);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  }

  useEffect(() => {
    getData(); 
    console.log(categories)
  }, []);


  return (
    <>
    <div className='w-full flex flex-col items-center justify-center gap-5 p-5'>
      <h3 className='text-3xl font-bold text-slate-900 uppercase'>Categorias</h3>
      {/* Categorias */}
      <div>
        <article>

        </article>
      </div>
    </div>
    </>
  )
}
