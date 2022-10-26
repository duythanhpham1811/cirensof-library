# cirensof-library

# thêm file .npmrc vào project trước khi cài đặt
    registry=https://registry.npmjs.org/
    @duythanhpham1811:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=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

# các thư viện cần cài đặt
    "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@mui/icons-material": "^5.10.3",
    "@mui/material": "^5.10.3",
    "@mui/styled-engine-sc": "^5.10.3",
    "@mui/x-data-grid": "^5.15.2",
    "@mui/x-date-pickers": "^5.0.0-beta.5",
    "@mui/lab": "^5.0.0-alpha.78",
    "node-sass": "^7.0.1",
    "react": "^18.2.0",
    "sass": "^1.54.8",
    "styled-components": "^5.3.5",
    "date-fns": "^2.29.1",
    "prop-types": "^15.7.2",
    "formik": "^2.2.9",
    "ag-grid-community": "^28.1.0",
    "ag-grid-enterprise": "^28.1.0",
    "ag-grid-react": "^28.1.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "redux": "^4.2.0",
    "moment": "^2.29.4",
    "react-bootstrap": "^2.5.0"
    
## lưu ý
    - Để sử dụng component table và component thao tác cần thêm vào redux 1 reducer : tableReducer
    - Sử dụng createSlice của toolkit để tạo tableReducer : 
            const tableReducer = createSlice({
                name: "table",
                initialState: {
                    autofit:true,
                    detail:false,
                    fullsize:false,
                    openDraw:true,
                },
                reducers: {
                     autofit: (state, action) =>{   
                        state.autofit = !state.autofit
                    },
                    opendetail: (state, action) =>{
                        state.detail = true  
                    },
                    offdetail: (state, action) =>{
                        state.detail = false
                        state.fullsize = false
                    },
                    openfullsize: (state, action) =>{
                        state.fullsize = true
                    },
                    closefullsize: (state, action) =>{
                        state.fullsize = false
                    },
                    handlefullsize: (state, action) =>{
                        state.fullsize = !state.fullsize
                        state.autofit = !state.autofit
                    },
                    handleOpenDraw: (state, action) =>{
                        state.openDraw = !state.openDraw
                    },
                },
            });
     - Thêm: <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
              integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
              crossorigin="anonymous"
            />
       vào file index.html (thư mục public dự án) vì có sử dụng react-bootstrap
               
                        
