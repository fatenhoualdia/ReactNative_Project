import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['من المدخل الرئيسي','من المدخل الخلفي', 'الجناح',  'الطابق','القسم/الادارة','إسم القاعة','القاعة'],
      tableData: [
        ['إضغط لعرض المسار','إضغط لعرض المسار','مبنى 4', 'A', 'ألدور الثاني', 'قسم الفيزياء','1652'],
        ['إضغط لعرض المسار','إضغط لعرض المسار','مبنى 4', 'B', 'ألدور الثاني', 'قسم الرياضيات','1552'],
        ['إضغط لعرض المسار','إضغط لعرض المسار','مبنى 5', 'C', 'ألدور الثاني', 'قسم الرياضيات','16892'],
        ['إضغط لعرض المسار','إضغط لعرض المسار','مبنى 5', 'D', 'ألدور الثاني', 'قسم كيمياء','1652'],
        ['إضغط لعرض المسار','إضغط لعرض المسار','مبنى 4', 'A', 'ألدور الثاني', 'قسم الجيولوجيا','4582'],
      ],
      searchQuery: '', // For storing the search query
    }
  }

  _alertIndex(index) {
    Alert.alert(`الدور ثاني ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    // Filter table data based on search query for the "إسم القاعة" column
    const filteredTableData = state.tableData.filter(row =>
      row[5].includes(state.searchQuery)
    );

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={query => this.setState({ searchQuery: query })}
          value={state.searchQuery}
          placeholder="Filter by إسم القاعة..."
        />
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.headerText}/>
          {
            filteredTableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 2, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 100, backgroundColor: '#1f83c2' },
  text: { margin: 5, color: '#000', fontSize: 13, textAlign: 'center' },
  headerText: { margin: 3, color: '#fff', fontSize: 20, textAlign: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#e6e5e3' },
  btn: { width: 45, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2},
  btnText: { textAlign: 'center', color: '#fff' },
  input: { height: 40, borderColor: 'gray', borderWidth: 2, marginBottom: 20, paddingLeft: 10 },
});
