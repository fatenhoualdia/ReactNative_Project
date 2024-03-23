import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';
import jsonData from './data.json'; // Import JSON data

// Composant de la table
class DataTable extends Component {
  render() {
    const { tableHeaders, filteredData } = this.props;

    return (
      <Table borderStyle={{ borderColor: 'transparent' }}>
        <Row
          data={tableHeaders}
          style={styles.head}
          textStyle={styles.headerText}
        />
        {filteredData.map((rowData, index) => (
          <TableWrapper key={index} style={[styles.row, index % 2 && { backgroundColor: '#f2f2f2' }]}>
            {tableHeaders.map(header => (
              <Cell
                key={header}
                data={rowData[header]}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    );
  }
}

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { searchQuery } = this.state;

    // Filter the JSON data based on the search query
    const filteredData = jsonData.filter(item =>
      Object.values(item).some(
        value => typeof value === 'string' && value.includes(searchQuery),
      )
    );

    // Extract table headers from the first item in the filtered data
    const tableHeaders = filteredData.length > 0 ? Object.keys(filteredData[0]) : [];

    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={styles.input}
            onChangeText={this.handleSearch}
            value={searchQuery}
            placeholder="Filtrer par إسم القاعة.."
          />
          <DataTable tableHeaders={tableHeaders} filteredData={filteredData} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 2, paddingTop: 30, backgroundColor: '#fff' },
  input: {
    height: 60,
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 10,
  },
  head: { height: 60, backgroundColor: '#318CE7', fontSize: 20},
  text: { margin: 6, fontSize: 14 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});
