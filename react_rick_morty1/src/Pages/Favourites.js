import React,{useState,useEffect} from 'react'
import styles from '../Components/Cards/Cards.module.css'


const Favourites = () => {

    const [array,setArray]=useState([]);
    let newArray;
    newArray=array.toString();
    const [favdata,updateFavData]=useState();
    
    
    let display;
    let api=`https://rickandmortyapi.com/api/character/${newArray}`
    
    
    useEffect(()=>{
       
        if(localStorage.getItem('liked')!=null)
        {
           setArray(JSON.parse(localStorage.getItem('liked'))) ;    
        }
      },[])
      

      useEffect(()=>{
        (async function(){
          let data1= await fetch(api).then((response)=>{return response.json()});
       updateFavData(data1)
          
        })()
      },[api])

      // console.log(favdata[0].name)

      // 
       
      // if(favdata)
      //     {
      //       display=favdata.map(x=>{
             
             
      //       return (<div className={styles.flipcard} key={x.id}>
      //                <div className={styles.flipcardinner} >
      //                   <div className={styles.flipcardfront}>
      //                           <img src={x.image} className={`${styles.img}`} alt=""/>
      //                           </div>
      //                           <div className={styles.flipcardback}>
      //                           <div className={styles.content}> 
      //                             <div className="fs-3 fw-bold mb-1" style={{color:"black"}}>{x.name}</div>
                    
      //                             <div className="fs-6">Gender</div>
      //                             <div className="fs-6 fw-bold">{x.gender}</div>
      //                             <div className="fs-6">Species</div>
      //                             <div className="fs-6 fw-bold">{x.species}</div>
      //                             <div className="fs-6">Status</div>
      //                             <div className="fs-6 fw-bold">{x.status}</div> 
      //                            </div> 
      //                         </div>
      //                   </div>
      //           </div>)
      //       })
      //     }  
      //     else{
      //      display="No Characters Found :/"
      //     }
     
    return (
            <>{display}</>
    )
    }

export default Favourites;
   
