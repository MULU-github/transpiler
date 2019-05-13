/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var go_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,13],$V1=[1,7],$V2=[1,8],$V3=[1,10],$V4=[1,12],$V5=[1,14],$V6=[1,18],$V7=[5,18,27,32,40,41,42,81],$V8=[5,18,27,30,32,40,41,42,81],$V9=[1,33],$Va=[1,26],$Vb=[1,32],$Vc=[1,29],$Vd=[1,34],$Ve=[1,35],$Vf=[1,38],$Vg=[1,49],$Vh=[1,48],$Vi=[1,61],$Vj=[1,62],$Vk=[1,63],$Vl=[1,64],$Vm=[1,65],$Vn=[1,66],$Vo=[1,67],$Vp=[1,68],$Vq=[1,69],$Vr=[1,70],$Vs=[1,71],$Vt=[2,79],$Vu=[5,18,21,27,29,30,32,35,40,41,42,57,58,59,60,61,62,63,64,65,66,67,71,81],$Vv=[5,18,21,27,29,30,32,35,40,41,42,53,57,58,59,60,61,62,63,64,65,66,67,71,77,81],$Vw=[1,97],$Vx=[1,130],$Vy=[2,86],$Vz=[21,71],$VA=[35,36],$VB=[1,148],$VC=[18,27,32,40,41,42,81],$VD=[18,27,30,32,40,41,42,81],$VE=[5,18,21,27,29,30,32,35,40,41,42,57,58,59,60,61,62,71,81],$VF=[5,18,21,27,29,30,32,35,40,41,42,57,58,59,60,61,62,63,64,71,81],$VG=[1,160],$VH=[2,98],$VI=[18,21,29,30,35],$VJ=[1,181],$VK=[5,18,27,30,32,35,40,41,42,81],$VL=[18,30];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements":4,"EOF":5,"statements_":6,"statements_with_vars":7,"initialize_vars":8,"statements_without_vars":9,"statement":10,"initialize_var1":11,"initialize_var":12,"statements":13,"struct_statements":14,"struct_statement":15,"identifiers":16,"type_":17,"IDENTIFIER":18,"(":19,"parameters":20,")":21,"access_modifier":22,"public":23,"private":24,"top_level_statement":25,"statement_with_semicolon":26,"type":27,"struct":28,"{":29,"}":30,"interface":31,"for":32,"e":33,"_":34,",":35,":=":36,"range":37,"dot_expr":38,"if_statement":39,"func":40,"return":41,"var":42,"parallel_assignment":43,"access_array":44,"=":45,"++":46,"--":47,"+=":48,"-=":49,"*=":50,"/=":51,"function_call":52,".":53,"parallel_lhs":54,"parallel_rhs":55,"initialize_var_":56,"||":57,"&&":58,"<=":59,"<":60,">=":61,">":62,"+":63,"-":64,"*":65,"/":66,"%":67,"parentheses_expr":68,"[":69,"access_arr":70,"]":71,"exprs":72,"function":73,"NUMBER":74,"STRING_LITERAL":75,"parameter":76,"][":77,"types":78,"elif":79,"else":80,"if":81,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",18:"IDENTIFIER",19:"(",21:")",23:"public",24:"private",27:"type",28:"struct",29:"{",30:"}",31:"interface",32:"for",34:"_",35:",",36:":=",37:"range",40:"func",41:"return",42:"var",45:"=",46:"++",47:"--",48:"+=",49:"-=",50:"*=",51:"/=",53:".",57:"||",58:"&&",59:"<=",60:"<",61:">=",62:">",63:"+",64:"-",65:"*",66:"/",67:"%",69:"[",71:"]",73:"function",74:"NUMBER",75:"STRING_LITERAL",77:"][",80:"else",81:"if"},
productions_: [0,[3,2],[6,1],[6,2],[9,2],[9,1],[7,2],[7,1],[8,2],[8,1],[13,1],[14,2],[14,1],[15,2],[15,5],[22,1],[22,1],[25,1],[25,1],[4,2],[4,1],[10,1],[10,6],[10,6],[10,5],[10,10],[10,10],[10,1],[10,12],[10,9],[26,2],[26,3],[26,3],[26,1],[26,3],[26,3],[26,2],[26,2],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,1],[43,3],[54,3],[54,3],[55,3],[55,3],[11,1],[12,1],[56,5],[56,4],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,2],[33,1],[38,3],[38,1],[44,4],[52,3],[52,4],[68,7],[68,1],[68,1],[68,2],[68,3],[68,3],[68,1],[68,1],[68,1],[17,3],[17,1],[76,2],[20,3],[20,1],[20,0],[70,3],[70,1],[72,3],[72,1],[78,3],[78,1],[79,7],[79,4],[39,6],[39,5],[16,3],[16,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 3:
this.$ = [["lexically_scoped_vars",$$[$0-1],["statements",$$[$0]]]]
break;
case 4:
this.$ = $$[$0-1].concat($$[$01]);
break;
case 5: case 9: case 12: case 20: case 68: case 85: case 88:
this.$ =
 [$$[$0]];
break;
case 6:
this.$ = $$[$0-1].concat([["semicolon",$$[$0]]]);
break;
case 8: case 19:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 10:
this.$ = ["statements",$$[$0]]
break;
case 11:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 13:
this.$ = ["struct_statement",$$[$0],$$[$0-1]];
break;
case 14:
this.$ = ["interface_instance_method","public",$$[$0],$$[$0-4],$$[$0-2]];
break;
case 18:
this.$ = ["semicolon",$$[$0]]
break;
case 21:
this.$ = ["semicolon",$$[$0]];
break;
case 22:
this.$ = ["struct",$$[$0-5],$$[$0-1]]
break;
case 23:
this.$ = ["interface","public",$$[$0-4],$$[$0-1]]
break;
case 24:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 25:
this.$ = ["foreach","Object",$$[$0-6],$$[$0-3],$$[$0-1]];
break;
case 26:
this.$ = ["foreach_with_index","Object",$$[$0-8],$$[$0-6],$$[$0-3],$$[$0-1]];
break;
case 28:
this.$ = ["function_with_retval",$$[$0-5],"public",$$[$0-4],$$[$0-10],$$[$0-8],$$[$0-1]];
break;
case 29:
this.$ = ["function","public",$$[$0-3],$$[$0-7],$$[$0-5],$$[$0-1]];
break;
case 30:
this.$ = ["return",$$[$0]];
break;
case 31:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 32:
this.$ = ["initialize_empty_vars",$$[$0],$$[$0-1]];
break;
case 34: case 35:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 36: case 37:
this.$ = [$$[$0],$$[$0-1]];
break;
case 38: case 39: case 40: case 41: case 54: case 55: case 56: case 57: case 58: case 59: case 60: case 61: case 62: case 63: case 64:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 42: case 43:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 45:
this.$ = ["parallel_assignment",["parallel_lhs",$$[$0-2]],["parallel_rhs",$$[$0]]]
break;
case 46: case 48:
this.$ = [$$[$0-2].concat([$$[$0]])];
break;
case 47: case 49:
this.$ = [$$[$0-2],$$[$0]]
break;
case 50:
this.$ = ["initialize_var"].concat($$[$0]);
break;
case 51:
this.$ = ["lexically_scoped_var"].concat($$[$0]);
break;
case 52:
this.$ = [$$[$0-2],$$[$0-3],$$[$0]];
break;
case 53:
this.$ = ["Object",$$[$0-2],$$[$0]];
break;
case 65:
this.$ = ["-",$$[$0]];
break;
case 66:
this.$ = [".", $$[$0]];
break;
case 67: case 84: case 87: case 89: case 91: case 97:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 69:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 70:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 71:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 72:
this.$ = ["anonymous_function","Object",$$[$0-4],$$[$0-1]]
break;
case 75:
this.$ = ["initializer_list","Object",[]];
break;
case 76:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 77:
this.$ = $$[$0-1];
break;
case 78: case 79: case 80:
this.$ = yytext;
break;
case 81:
this.$ = [$$[$0-2],"[]"];
break;
case 83:
this.$ = [$$[$0], $$[$0-1]];
break;
case 86:
this.$ = []
break;
case 90: case 92: case 98:
this.$ = [$$[$0]];
break;
case 93:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 94:
this.$ = ["else",$$[$0-1]];
break;
case 95:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 96:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
}
},
table: [{3:1,4:2,10:4,11:5,18:$V0,25:3,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:11,81:$V6},{1:[3]},{5:[1,20],10:4,11:5,18:$V0,25:21,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:11,81:$V6},o($V7,[2,20]),o($V7,[2,17]),o($V7,[2,18]),o($V8,[2,21]),{18:[1,22]},{18:[1,25],19:$V9,33:23,34:[1,24],38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},o($V8,[2,27]),{18:[1,36]},o($V8,[2,50]),{18:$Vf,19:$V9,33:37,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{19:$Vg,35:[1,50],36:[1,39],45:[1,40],46:[1,41],47:[1,42],48:[1,43],49:[1,44],50:[1,45],51:[1,46],53:[1,47],69:$Vh},{16:51,18:[1,52]},o($V8,[2,33]),{45:[1,53]},o($V8,[2,44],{53:[1,54]}),{18:$Vf,19:$V9,33:55,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{35:[1,57],36:[1,56]},{1:[2,1]},o($V7,[2,19]),{28:[1,58],31:[1,59]},{29:[1,60],57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs},{35:[1,72]},o([29,53,57,58,59,60,61,62,63,64,65,66,67],$Vt,{19:$Vg,35:[1,73],69:$Vh}),{18:$Vf,19:$V9,33:74,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},o($Vu,[2,66]),o($Vu,[2,68],{53:[1,75]}),{19:[1,76]},o($Vv,[2,73]),o($Vv,[2,74]),{18:$Vf,19:$V9,33:79,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,71:[1,77],72:78,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:80,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},o($Vv,[2,78]),o($Vv,[2,80]),{19:[1,81]},o($V8,[2,30],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($Vv,$Vt,{19:$Vg,69:$Vh}),{18:$Vf,19:$V9,33:82,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:83,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},o($V8,[2,36]),o($V8,[2,37]),{18:$Vf,19:$V9,33:84,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:85,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:86,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:87,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,38:88,44:30,52:31,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,44:30,52:31,68:90,69:$Vb,70:89,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,21:[1,91],33:79,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,72:92,73:$Vc,74:$Vd,75:$Ve},{18:[1,93]},{18:[1,94]},{18:[1,95],35:$Vw,45:[1,96]},{18:$Vf,19:$V9,33:98,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,38:99,44:30,52:31,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{29:[1,100],57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs},{18:$Vf,19:$V9,33:102,38:27,44:30,52:31,55:101,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:[1,103]},{29:[1,104]},{29:[1,105]},{6:107,7:108,8:109,9:110,10:112,12:111,13:106,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},{18:$Vf,19:$V9,33:114,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:115,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:116,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:117,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:118,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:119,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:120,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:121,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:122,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:123,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:124,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:[1,125]},{18:[1,126]},o($Vu,[2,65]),{18:$Vf,19:$V9,38:127,44:30,52:31,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vx,20:128,21:$Vy,76:129},o($Vv,[2,75]),{71:[1,131]},o($Vz,[2,90],{35:[1,132],57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),{21:[1,133],57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs},{18:$Vx,20:134,21:$Vy,76:129},o($V8,[2,31],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,35],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,38],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,39],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,40],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,41],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,43]),{71:[1,135]},{71:[2,88],77:[1,136]},o($Vv,[2,70]),{21:[1,137]},o($VA,[2,47]),o($V8,[2,32]),{45:[1,138]},{18:$Vf,19:$V9,33:139,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{16:140,18:[1,141]},o($V8,[2,34],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,42]),{6:107,7:108,8:109,9:110,10:112,12:111,13:142,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},o($V8,[2,45],{35:[1,143]}),{35:[1,144],57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs},o($VA,[2,46]),{14:145,15:146,16:147,18:$VB},{14:149,15:146,16:147,18:$VB},{30:[1,150]},{30:[2,10]},{30:[2,2]},{7:151,9:110,10:112,12:152,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},{10:154,11:153,18:$V0,26:6,27:$V1,30:[2,7],32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:11,81:$V6},o($VC,[2,9]),o($VD,[2,5]),o($VC,[2,51]),o([5,18,21,27,29,30,32,35,40,41,42,57,71,81],[2,54],{58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o([5,18,21,27,29,30,32,35,40,41,42,57,58,71,81],[2,55],{59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($VE,[2,56],{63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($VE,[2,57],{63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($VE,[2,58],{63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($VE,[2,59],{63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($VF,[2,60],{65:$Vq,66:$Vr,67:$Vs}),o($VF,[2,61],{65:$Vq,66:$Vr,67:$Vs}),o($Vu,[2,62]),o($Vu,[2,63]),o($Vu,[2,64]),{36:[1,155]},{36:[1,156]},o($Vu,[2,67]),{21:[1,157]},{21:[2,85],35:[1,158]},{17:159,18:$VG},o($Vv,[2,76]),{18:$Vf,19:$V9,33:79,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,72:161,73:$Vc,74:$Vd,75:$Ve},o($Vv,[2,77]),{21:[1,162]},o([5,18,21,27,29,30,32,35,40,41,42,45,53,57,58,59,60,61,62,63,64,65,66,67,71,77,81],[2,69]),{18:$Vf,19:$V9,44:30,52:31,68:90,69:$Vb,70:163,73:$Vc,74:$Vd,75:$Ve},o($Vv,[2,71]),{18:$Vf,19:$V9,33:164,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},o($V8,[2,53],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),{18:[2,97]},{18:$VH,35:$Vw},{30:[1,165]},{18:$Vf,19:$V9,33:166,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,33:167,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{30:[1,168]},{14:169,15:146,16:147,18:$VB,30:[2,12]},{17:170,18:$VG},{18:$VH,19:[1,171],35:$Vw},{30:[1,172]},o($V8,[2,24]),{30:[2,3]},o($VC,[2,8]),{30:[2,6]},o($VD,[2,4]),{37:[1,173]},{37:[1,174]},{29:[1,175]},{18:$Vx,20:176,21:$Vy,76:129},o([21,35],[2,83]),o($VI,[2,82],{69:[1,177]}),o($Vz,[2,89]),{17:179,18:$VG,19:[1,178]},{71:[2,87]},o($V8,[2,52],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,96],{79:180,80:$VJ}),o($VK,[2,48],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($VK,[2,49],{57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs}),o($V8,[2,22]),{30:[2,11]},o($VL,[2,13]),{18:$Vx,20:182,21:$Vy,76:129},o($V8,[2,23]),{18:$Vf,19:$V9,38:183,44:30,52:31,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{18:$Vf,19:$V9,38:184,44:30,52:31,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{6:107,7:108,8:109,9:110,10:112,12:111,13:185,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},{21:[2,84]},{71:[1,186]},{18:[1,187]},{29:[1,188]},o($V8,[2,95]),{29:[1,190],81:[1,189]},{21:[1,191]},{29:[1,192]},{29:[1,193]},{30:[1,194]},o($VI,[2,81]),{17:195,18:$VG},{6:107,7:108,8:109,9:110,10:112,12:111,13:196,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},{18:$Vf,19:$V9,33:197,38:27,44:30,52:31,64:$Va,68:28,69:$Vb,73:$Vc,74:$Vd,75:$Ve},{6:107,7:108,8:109,9:110,10:112,12:111,13:198,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},{18:[1,199]},{6:107,7:108,8:109,9:110,10:112,12:111,13:200,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},{6:107,7:108,8:109,9:110,10:112,12:111,13:201,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},o($Vv,[2,72]),{21:[1,202]},{30:[1,203]},{29:[1,204],57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,63:$Vo,64:$Vp,65:$Vq,66:$Vr,67:$Vs},{30:[1,205]},o($VL,[2,14]),{30:[1,206]},{30:[1,207]},{29:[1,208]},o($V8,[2,29]),{6:107,7:108,8:109,9:110,10:112,12:111,13:209,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},o($V8,[2,94]),o($V8,[2,25]),o($V8,[2,26]),{6:107,7:108,8:109,9:110,10:112,12:111,13:210,18:$V0,26:6,27:$V1,32:$V2,39:9,40:$V3,41:$V4,42:$V5,43:15,44:16,52:17,54:19,56:113,81:$V6},{30:[1,211]},{30:[1,212]},{79:213,80:$VJ},o($V8,[2,28]),o($V8,[2,93])],
defaultActions: {20:[2,1],107:[2,10],108:[2,2],140:[2,97],151:[2,3],153:[2,6],163:[2,87],169:[2,11],176:[2,84]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 74
break;
case 2:return 75
break;
case 3:return "$"
break;
case 4:return 36
break;
case 5:return "func"
break;
case 6:return "type"
break;
case 7:return "range"
break;
case 8:return "struct"
break;
case 9:return 31
break;
case 10:return "public"
break;
case 11:return "extends"
break;
case 12:return "implements"
break;
case 13:return "private"
break;
case 14:return "static"
break;
case 15:return 81
break;
case 16:return 80
break;
case 17:return 41
break;
case 18:return 'while'
break;
case 19:return 32
break;
case 20:return 42
break;
case 21:return 'of'
break;
case 22:return 35
break;
case 23:return ';'
break;
case 24:return 53
break;
case 25:return ':'
break;
case 26:return 58
break;
case 27:return 57
break;
case 28:return 61
break;
case 29:return 62
break;
case 30:return 59
break;
case 31:return 60
break;
case 32:return '=='
break;
case 33:return 45
break;
case 34:return 50
break;
case 35:return 65
break;
case 36:return 51
break;
case 37:return 66
break;
case 38:return 67
break;
case 39:return 49
break;
case 40:return 47
break;
case 41:return 64
break;
case 42:return 46
break;
case 43:return 48
break;
case 44:return 63
break;
case 45:return '^'
break;
case 46:return 29
break;
case 47:return 30
break;
case 48:return 77
break;
case 49:return 69
break;
case 50:return 71
break;
case 51:return 19
break;
case 52:return 21
break;
case 53:return 34
break;
case 54:return 18
break;
case 55:return 5
break;
case 56:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?::=)/,/^(?:func\b)/,/^(?:type\b)/,/^(?:range\b)/,/^(?:struct\b)/,/^(?:interface\b)/,/^(?:public\b)/,/^(?:extends\b)/,/^(?:implements\b)/,/^(?:private\b)/,/^(?:static\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = go_parser;
exports.Parser = go_parser.Parser;
exports.parse = function () { return go_parser.parse.apply(go_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}