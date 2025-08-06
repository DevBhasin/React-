import React from 'react'

function Card({learner,newArr=[20,21,22]})
{
   //console.log('props :',props);//it is an empty object bhai mere iske andar ham kuch bhi daal sakte ha 
   
// console.log(props);

//    console.log(props.learner);


// console.log(learner);


//object poora ka poora nhi render krata ha for obvious reason mtlb behnid the scene waise hi har cheej vo object mein banaata ha and all that

//array poora ka poora as it is ui mein update kr deta ha aur single koi araay ka index ki value agr show krwani ha to vo bhi kr deta hai 
   
    return(

        <>
        
<div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h2 className="font-bold " >Bored ape nft accidental</h2>
            <h2>{newArr}</h2>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
        

        
        </>
    )
}


export default Card