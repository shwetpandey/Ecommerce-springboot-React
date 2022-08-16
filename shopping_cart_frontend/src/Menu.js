
import './App.css';
import { useEffect, useState } from 'react';
import {httpPost,httpPostwithToken} from './HttpConfig';





function Menu() {
	// const categoryList = ["Abhi","shweta"];
	const [categoryList,setCategoryList] = useState([]);
	const [productList,setProductList] = useState([]);
	useEffect(()=>{
		//TODO check user login
		getCategory();
	},[])
	
	const getCategory = ()=>{
		httpPostwithToken("product/getAllCategory",{}).
		then((res)=>{
			res.json().then(response=>{
				if(res.ok){
					setCategoryList(response);
					getProductsByCategory(response[0].id);
				}else{
					alert("Error in category api..")
				}
			})
			
			
		})
	}
	const getProductsByCategory = (cat_id)=>{
		let obj = {
			"cat_id":cat_id
		}
		
		httpPostwithToken("product/getProductsByCategory",obj)
		.then((res)=>{
			res.json().then(response=>{
				if(res.ok){
					if(response.length > 0){
						setProductList(response)
					}else{
						alert("No product found..");	
					}
				}else{
					setProductList([])
					alert("No product found..");
				}
			})
		},error=>{
			alert(error.message);
		}
		)
	}
	return (
		<div className="navigation">
			<div className="container">
				<nav className="navbar navbar-default">

					<div className="navbar-header nav_2">
						<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
					<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
						<ul className="nav navbar-nav">
							<li><a href="/" className="act">Home</a></li>

							{/* <li className="dropdown">
							<div className="dropdown">
									<button className="dropbtn">Category</button>
									<div className="dropdown-content">
									{
									categoryList.map((category)=>(
									<a onClick={(e)=>getProductsByCategory(category.id)} key={category.id} role="presentation" href="javascript:void(0)">{category.name}</a>
							))
						}
						
									</div>
								</div>

							</li> */}
							<li><a href="/about">About Us</a></li>

							{/* <li className="w3pages"><div className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></div>
								<div className="dropdown-content">
									<a href="icons.html">Web Icons</a>
									<a href="codes.html">Short Codes</a>
								</div>
							</li> */}
							<li><a href="mail.html">Mail Us</a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Menu;
