export const DeleteHelper = async ({view,choice,id}) =>
{
    try {
        const response = await fetch(`http://localhost:3000/${view}/${choice}/${id}`,{
            method:"DELETE",
            
        })
        if(!response.ok)
        {
             throw new Error("Network Response was not ok");
        }
        const data = await response.json();
          console.log("Success:", data);
          alert("The data has been Deleted");
          return data;
    } catch (error) {
        console.error("Error:",error);
        
    }
    
}
