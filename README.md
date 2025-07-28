# E-Commerce-Frontend

### Setup instructruction

1. Clone the project 

```
    git clone https://github.com/4getDeepCode/E-Commerce-Frontend.git
```

2. Move into the directory

```
    cd E-Commerce-Frontend
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```

### Instructions for tailwindcss follow these 3 steps

[tailwind official doc] (https://tailwindcss.com/docs/installation/using-vite)

1. Install tailwindcss

``` 
        npm install tailwindcss @tailwindcss/vite
```

2. Configure the plugin Add the tailwind directives at the top of the `vite.config.js` file

    ```
            import { defineConfig } from 'vite'
            import tailwindcss from '@tailwindcss/vite'
            export default defineConfig({
            plugins: [
            tailwindcss(),
        ],
    })      

    ```

3. Add the tailwind directives at the top of the `index.css` file

```
    @import "tailwindcss";
```



### Adding plugins and dependencies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast
```




