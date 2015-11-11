let { StyleSheet} = require('react-native');

let spaces = {
  gutter: 10,
  statusBarHeight: 30
};

let colors = {
  primary: '#DA4745',
  primaryHighlight: 'gray',
  light: 'gray',
  white: 'white'
};

let u = {
  centerX: {
    alignItems: 'center',
  },
  centerY: {
    justifyContent: 'center',
  },
  centerXY: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacedBorderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.light,
    paddingBottom: spaces.gutter,
    marginBottom: spaces.gutter,
  }
};

let text = {
  L: {
    fontSize: 20,
  },

  M: {
    fontSize: 15,
  },

  button: {
    fontWeight: 'bold',
    color: colors.white,
  }
};

let styles = StyleSheet.create({
  page: {
    marginTop: spaces.statusBarHeight,
    margin: spaces.gutter,
    flex: 1,
  },

  button: {
    backgroundColor: colors.primary,
    height: 50,

    ...u.centerXY
  },

  authorName: {
    ...u.spacedBorderBottom
  },

  authorNameText: {
    textAlign: 'center'
  },

  buttonLabel: {
    ...text.button
  },

  primaryHeading: {
    ...text.L
  },

  textInput: {
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colors.light, 
    borderWidth: 1,
    marginBottom: spaces.gutter
  },

  log: {
    flex: 1,
    ...u.spacedBorderBottom
  },
});

module.exports = {
  styles,
  colors
};