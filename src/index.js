// crear una instancia express (express tiene que ser con minúscula)
const  app = express();


// crear una variable 
app.set('port', process.env.PORT ||  4006)


//usar el puerto
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+ app.get('port'));
})


// middlewares: funciones que se ejecutan antes de las rutas
// da información extra en la terminal 
app.use(morgan('dev'));
//permitir peticiones remotas
app.use(cors());
//middlewares para interpretar los objetos JSON 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//cargar un archivo estático 
app.use(express.static(path.join(__dirname, '../public')))
console.log(path.join(__dirname, '../public'))

//rutas: nombre de dominio + ---- 
app.use('/apirecetas', recetasRouter)
// http://localhost:4000/