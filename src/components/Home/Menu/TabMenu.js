import React, {Component} from 'react';
import Tabs from "./Tabs";
import glamorous from "glamorous";
import axios from 'axios';
import { Table, Button } from 'reactstrap';
//Css
import '../../global/css/bootstrap.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class TabMenu extends Component {

  state={
    articles:[],
    stores:[],
  }


  getArticlesHandler(){
    axios.get('http://127.0.0.1:8000/api/v1/services/articles').then(
      response=>{
        this.setState({articles: response.data.articles});
      });
  }

  getStoresHandler(){
    axios.get('http://127.0.0.1:8000/api/v1/services/stores').then(
      response=>{
        this.setState({stores: response.data.stores});
      });
  }

  componentDidMount(){
    this.getArticlesHandler();
    this.getStoresHandler();
  }


  deleteArticleHandler(id){
    axios.delete('http://127.0.0.1:8000/api/v1/services/articles/delete/'+id).then(
      response=>{
        this.getArticlesHandler();
    })
  }

  deleteStoreHandler(id){
    axios.delete('http://127.0.0.1:8000/api/v1/services/stores/delete/'+id).then(
      response=>{
        this.getStoresHandler();
    })
  }

  componentWillReceiveProps() {} 

  render() {
    const articles = this.state.articles.map(article=>{    
      return <tr key={article.id}>
        <td>{article.name}</td>
        <td>{article.description}</td>
        <td>{article.price}</td>
        <td>{article.store_name}</td>
        <td>{article.total_in_shelf}</td>
        <td>{article.total_in_vault}</td>
        <td><Button outline color="danger" size="sm" onClick={()=>this.deleteArticleHandler(article.id)}>x</Button></td>
      </tr>;
    });

    const stores = this.state.stores.map(store=>{    
      return <tr key={store.id}>
        <td>{store.name}</td>
        <td>{store.address}</td>
        <td><Button outline color="danger" size="sm" onClick={()=>this.deleteStoreHandler(store.id)}>x</Button></td>
      </tr>;
    });
    return (
      <div >
        <div style={styles}>
          <Tabs
            activeTab={{
              id: "tab1"
            }}
          >
            <Tabs.Tab id="tab1" title="Stores">
              <glamorous.Div padding={40} className="container Content">
                <Table hover responsive >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stores}
                    </tbody>
                </Table>
              </glamorous.Div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Articles">
              <glamorous.Div padding={40} className="container Content">
                <Table hover responsive >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Store Name</th>
                      <th>Total in Shelf</th>
                      <th>Total in Vault</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles}
                  </tbody>
                </Table>
              </glamorous.Div>
            </Tabs.Tab>
          </Tabs>
        
        </div>
      </div>
    );
  }
}

export default TabMenu;
