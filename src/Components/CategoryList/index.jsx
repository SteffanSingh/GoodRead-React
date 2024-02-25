import Category from "./Category"



const CategoryList = () => {

  

    const items = [

        { catid: 1, catname: "Fiction", catImage:"http://placehold.it/400/888888" },
        { catid: 2, catname: "History", catImage:"http://placehold.it/400/888888" },
        { catid: 3, catname: "Science", catImage:"http://placehold.it/400/888888"  },
        { catid: 4, catname: "External Affairs", catImage:"http://placehold.it/400/888888" },

        { catid: 1, catname: "Fiction", catImage:"http://placehold.it/400/888888" },
        { catid: 2, catname: "History", catImage:"http://placehold.it/400/888888" },
        { catid: 3, catname: "Science", catImage:"http://placehold.it/400/888888"  },
        { catid: 4, catname: "External Affairs", catImage:"http://placehold.it/400/888888" },

        { catid: 1, catname: "Fiction", catImage:"http://placehold.it/400/888888" },
        { catid: 2, catname: "History", catImage:"http://placehold.it/400/888888" },
        { catid: 3, catname: "Science", catImage:"http://placehold.it/400/888888"  },
        { catid: 4, catname: "External Affairs", catImage:"http://placehold.it/400/888888" },

    ]



    return (
        <>
            <div className="container">
                
                <h1 className="text-center">
                    All Cateogory List
                </h1>
                <div className="row">
                {
                    items.map((category, index)=> 

                        <Category key={index} data={category} />

                    )
                }
                 
                             
                 </div>
            </div>

        </>
    )
}

export default CategoryList