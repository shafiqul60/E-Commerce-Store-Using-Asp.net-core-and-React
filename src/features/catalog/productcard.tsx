import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CardHeader, Avatar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/API/agent";
import { Product } from "../../app/models/product";


interface Props{
    product: Product;
}
export default function ProductCard({product}: Props){

  const[lodder, setlodder] = useState(false);

  function handleAddItem(productId : number){
    setlodder(true);
    agent.Basket.addItem(productId).catch(error=> console.log(error)).finally(() => setlodder(false));
  
  }
   
    return(
        <>
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                
                title = {product.name.substring(0,10)}
                titleTypographyProps={
                    {
                        sx :{fontWeight: 'bold', color:'primary.main'}
                    }
                }
            />


      <CardActionArea>
        <CardMedia
          sx={{height: 140, backgroundSize:'contain'}}
          image={product.imageUrl}
          title={product.name}
        />
        <CardContent>
          <Typography color='secondary' gutterBottom variant="h5" component="h2">
            ৳{product.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description.substring(0,120)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  onClick={()=> handleAddItem(product.id)} size="small" color="primary">
          Add To Cart
        </Button>
        <Button component= {Link} to= {`/catalog/${product.id}`} size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </>
    )
}