import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CardHeader, Avatar } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props{
    product: Product;
}
export default function ProductCard({product}: Props){

   
    return(
        <>
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.title.charAt(0).toUpperCase()}
                    </Avatar>
                }
                
                title = {product.title.substring(0,10)}
                titleTypographyProps={
                    {
                        sx :{fontWeight: 'bold', color:'primary.main'}
                    }
                }
            />


      <CardActionArea>
        <CardMedia
          sx={{height: 140, backgroundSize:'contain'}}
          image={product.image}
          title={product.title}
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
        <Button size="small" color="primary">
          Add To Cart
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
        </>
    )
}