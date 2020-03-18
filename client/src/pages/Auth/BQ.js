import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./BQ.css";
const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery({
  projectId: 'furniturecom-141118',
  keyFilename: '/Users/joscolli/Desktop/VSCode/garrettcollinson.com/GoogleCreds/furniturecom-141118-92d5a0c4c039.json'
});

class BQ extends Component {
  state = {
    rows: {}
  }
     componentDidMount() {
      // The SQL query to run
      const sqlQuery = `SELECT
        CONCAT(
          'https://stackoverflow.com/questions/',
          CAST(id as STRING)) as url,
        view_count
        FROM \`bigquery-public-data.stackoverflow.posts_questions\`
        WHERE tags like '%google-bigquery%'
        ORDER BY view_count DESC
        LIMIT 10`;
    
      const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'US',
      };
      // Runs the query
       bigquery.query(options).then(function(rows) {
        this.setState({rows: JSON.stringify(rows)});
       });
    };
  
    render() {
      return (
        <div>
          <BQ></BQ>
        </div>
      );
    }
  }
export default BQ;
