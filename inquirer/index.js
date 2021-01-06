const inquirer = require('inquirer');
const utils = require('../func/func');
const fuzzy = require('fuzzy');
const _ = require('loadsh')
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));


var colors = ['red', 'green', 'blue', 'yellow'];
var foods = ['Apple', 'Orange', 'Banana', 'Kiwi', 'Lichi', 'Grapefruit'];
var states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];
inquirer
  .prompt([
    /* 这里输入你想提的问题 */
    {
      type:"rawlist",
      name:"choice",
      message:"请问求最小公倍数还是最大公约数",
      default:"",
      choices:[{
        name:"最小公倍数",
        value:"1"
      },
      // new inquirer.Separator(),
      {
        name:"最大公约数",
        value:"2"
      }],
      when:false
    },{
      type: 'number',
      name: 'num1',
      message: '请输入第一个数字',
      when:false
    },{
      type: 'number',
      name: 'num2',
      message: '请输入第二个数字',
      when:false
    },{
    type: 'autocomplete',
    name: 'fruit',
    suggestOnly: true,
    message: 'What is your favorite fruit?',
    searchText: 'We are searching the internet for you!',
    emptyText: 'Nothing found!',
    default: 'Banana',
    source: function(answers, input){
      input = input || '';
      return new Promise(function (resolve) {
        setTimeout(function () {
          var fuzzyResult = fuzzy.filter(input, foods);
          resolve(
            fuzzyResult.map(function (el) {
              return el.original;
            })
          );
        }, _.random(30, 500));
      });
    },
    pageSize: 4,
    validate: function (val) {
      return val ? true : 'Type something!';
    },
  },{
    type: 'checkbox-plus',
    name: 'colors',
    message: 'Enter colors',
    pageSize: 10,
    highlight: true,
    searchable: true,
    default: ['yellow', 'red'],
    source: function(answersSoFar, input) {
  
      input = input || '';
  
      return new Promise(function(resolve) {
  
        var fuzzyResult = fuzzy.filter(input, colors);
  
        var data = fuzzyResult.map(function(element) {
          return element.original;
        });
  
        resolve(data);
        
      });
  
    }
  },{
    type: 'autocomplete',
    name: 'state',
    message: 'Select a state to travel from',
    default: 'California',
    validate(choice, answers) {
      if (answers.fruit === 'Banana') {
        return choice.value[0] === 'C'
          ? true
          : 'Since you selected Banana in the previous prompt you need to select a state that starts with "C". Makes sense.';
      }
      return true;
    },
    source: searchStates,
  },])
  .then(answers => {
    // 用户反馈
    console.log(answers);
    if(answers.choice == '1'){
      var result = utils.getLcm(answers.num1,answers.num2);
      console.log(result);
    }
    if(answers.choice == '2'){
      var result = utils.getGcd(answers.num1,answers.num2);
      console.log(result);
    }
  })
  .catch(error => {
    if(error.isTtyError) {
      // 提示无法在当前环境中呈现
      console.log(error);
    } else {
      // 一些别的什么问题
      console.log(error);
    }
  });
  /**
    question对象
      type: (String) 提示的类型，默认值input，可选值input, number, confirm, list, rawlist, expand, checkbox, password, editor，后文还将继续讨论
      name: (String) 提示的名称，会在answer对象中作为key值
      message: (String|Function) 在命令行打印的问题，若是函数，则第一个参数是当前的问答会话对象。缺失值为name加冒号
      default: (String|Number|Boolean|Array|Function) 如果没有输入，则选择默认值。若是函数，则第一个参数是当前的问答会话对象。若是数组，默认并不是选择数组中的值，而是数组本身
      choices: (Array|Function) 数组或一个返回choices数组的函数。若是函数，则第一个参数是当前的问答会话对象。数组中的值可以是数字，字符串，或一个对象。此对象需包含name（在list中显示），value（真正保存于问答会话对象的值），short（选择后显示）。choices数组也可包含一个Separator
      validate: (Function) 认证用户输入的值是否有效，有效则返回true，无效则可以返回一个错误（字符串）
      filter: (Function) 过滤器，接受用户输入，返回的值将作为插入到Answers对象的值
      transformer: (Function) 接受用户输入，当前的问答会话对象，和option flags只会更改用户编辑时的显示，不会影响问答对象
      when: (Function, Boolean) 判断此条问题是否应该被问到
      pageSize: (Number) 当我们使用list, rawList,expand or checkbox改变行数
      prefix: (String) 更改默认的前缀消息
      suffix: (String) 更改默认的后缀消息
      askAnswered: (Boolean) Force to prompt the question if the answer already exists.
   */

  function searchStates(answers, input) {
    input = input || '';
    return new Promise(function (resolve) {
      setTimeout(function () {
        var fuzzyResult = fuzzy.filter(input, states);
        const results = fuzzyResult.map(function (el) {
          return el.original;
        });
  
        results.splice(5, 0, new inquirer.Separator());
        results.push(new inquirer.Separator());
        resolve(results);
      }, _.random(30, 500));
    });
  }
 