import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 32,
  },
  input:{
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  inputFocus: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    borderColor: '#5E60CE', 
    borderWidth: 1,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
})