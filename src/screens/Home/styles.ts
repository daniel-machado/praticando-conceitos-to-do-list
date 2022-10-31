import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 24,
  },
  infoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoCreate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  create: {
    color: '#4EA8DE',
    marginRight: 8,
    fontSize: 14,
    fontWeight: 'bold'
  },
  infoDone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  done: {
    color: '#8284FA',
    marginRight: 8,
    fontSize: 14,
    fontWeight: 'bold'
  },
  badge: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontSize: 14,
    fontWeight: 'bold'

  },
  line:{
    marginTop: 20,
    padding: 1,
    backgroundColor: '#333333',
    marginBottom: 20
  },
  ListEmptyContent:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 45
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },
  listEmptyTextBold:{
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  }
})