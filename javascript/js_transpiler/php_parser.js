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
var php_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,21],$V1=[1,22],$V2=[1,19],$V3=[1,6],$V4=[1,7],$V5=[1,8],$V6=[1,10],$V7=[1,11],$V8=[1,12],$V9=[1,18],$Va=[1,20],$Vb=[5,18],$Vc=[5,12,13,16,18,23,28,29,34,38,39,77,81],$Vd=[1,43],$Ve=[1,39],$Vf=[1,35],$Vg=[1,38],$Vh=[1,32],$Vi=[1,40],$Vj=[1,42],$Vk=[22,26],$Vl=[1,59],$Vm=[1,57],$Vn=[1,58],$Vo=[2,67],$Vp=[15,36],$Vq=[1,76],$Vr=[1,66],$Vs=[1,67],$Vt=[1,68],$Vu=[1,69],$Vv=[1,70],$Vw=[1,71],$Vx=[1,72],$Vy=[1,73],$Vz=[1,74],$VA=[1,75],$VB=[1,77],$VC=[1,78],$VD=[22,26,42,51,53,54,55,56,57,58,59,60,61,62,63,64,73],$VE=[22,26,42,51,53,54,55,56,57,58,59,60,61,62,63,64,66,73,74],$VF=[1,103],$VG=[2,71],$VH=[26,42],$VI=[16,60,73,81],$VJ=[1,143],$VK=[22,26,42,53,54,55,56,57,58,59,60,73],$VL=[22,26,42,51,53,54,55,56,57,58,59,60,61,62,73],$VM=[1,178],$VN=[1,179],$VO=[5,12,13,16,18,23,28,29,34,38,39,76,77,78,81];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"class_statements":7,"class_statements_":8,"statements":9,"class_statement":10,"access_modifier":11,"public":12,"private":13,"class_":14,"class":15,"IDENTIFIER":16,"{":17,"}":18,"extends":19,"implements":20,"statement_with_semicolon":21,";":22,"while":23,"(":24,"e":25,")":26,"bracket_statements":27,"for":28,"foreach":29,"var_name":30,"as":31,"=>":32,"if_statement":33,"function":34,"parameters":35,"static":36,"type":37,"System.out.println":38,"return":39,"=":40,"[":41,"]":42,"access_array":43,"++":44,"--":45,"+=":46,"-=":47,"*=":48,"/=":49,"function_call":50,".":51,"dot_expr":52,"||":53,"&&":54,"!==":55,"===":56,"<=":57,"<":58,">=":59,">":60,"+":61,"-":62,"*":63,"/":64,"parentheses_expr":65,"->":66,"access_arr":67,"exprs":68,"NUMBER":69,"STRING_LITERAL":70,"types":71,"parameter":72,",":73,"][":74,"else_if":75,"else":76,"if":77,"elseif":78,"elif":79,"else_statement":80,"$":81,"var_names":82,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"public",13:"private",15:"class",16:"IDENTIFIER",17:"{",18:"}",19:"extends",20:"implements",22:";",23:"while",24:"(",26:")",28:"for",29:"foreach",31:"as",32:"=>",34:"function",36:"static",38:"System.out.println",39:"return",40:"=",41:"[",42:"]",44:"++",45:"--",46:"+=",47:"-=",48:"*=",49:"/=",51:".",53:"||",54:"&&",55:"!==",56:"===",57:"<=",58:"<",59:">=",60:">",61:"+",62:"-",63:"*",64:"/",66:"->",69:"NUMBER",70:"STRING_LITERAL",73:",",74:"][",76:"else",77:"if",78:"elseif",81:"$"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[9,1],[8,2],[8,1],[11,1],[11,1],[14,6],[14,8],[14,8],[6,2],[6,1],[6,5],[6,9],[6,9],[6,7],[6,1],[6,8],[10,10],[21,4],[21,2],[21,4],[21,5],[21,3],[21,3],[21,2],[21,2],[21,3],[21,3],[21,3],[21,3],[21,1],[21,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,3],[25,2],[25,1],[52,3],[52,1],[43,4],[50,3],[50,4],[65,7],[65,1],[65,1],[65,2],[65,3],[65,3],[65,1],[65,1],[65,1],[37,3],[37,4],[37,1],[72,1],[35,3],[35,1],[35,0],[67,3],[67,1],[68,3],[68,1],[71,3],[71,1],[75,2],[75,1],[79,6],[79,5],[79,1],[80,2],[33,6],[33,5],[30,2],[82,3],[82,1],[27,3],[27,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 6:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 7: case 52: case 70: case 73:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["class_statements",$$[$0]]
break;
case 5:
this.$ = ["statements",$$[$0]]
break;
case 10:
this.$ = ["class",$$[$0-5],$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 11:
this.$ = ["class_extends",$$[$0-7],$$[$0-6],$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 12:
this.$ = ["class_implements",$$[$0-7],$$[$0-6],$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 13: case 90:
this.$ = ["semicolon",$$[$0-1]];
break;
case 15:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ["for",$$[$0-6],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 17:
this.$ = ["foreach_with_index","Object",$$[$0-4],$$[$0-2],$$[$0-6],$$[$0]];
break;
case 18:
this.$ = ["foreach","Object",$$[$0-2],$$[$0-4],$$[$0]];
break;
case 20:
this.$ = ["function","public","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 21:
this.$ = ["static_method",$$[$0-9],$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-2]];
break;
case 22:
this.$ = ["println",$$[$0-1]];
break;
case 23:
this.$ = ["return",$$[$0]];
break;
case 24:
this.$ = ["initialize_var",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 25:
this.$ = ["function_call","array_push",[$$[$0-4],$$[$0]]];
break;
case 26: case 27:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 28: case 29:
this.$ = [$$[$0],$$[$0-1]];
break;
case 30: case 31: case 32: case 33: case 36: case 37: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 38:
this.$ = ['!=',$$[$0-2],$$[$0]];
break;
case 39:
this.$ = ['==',$$[$0-2],$$[$0]];
break;
case 49:
this.$ = ["-",$$[$0]];
break;
case 50:
this.$ = [".", $$[$0]];
break;
case 51: case 69: case 72: case 74: case 76: case 87:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 53:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 54:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 55:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 56:
this.$ = ["anonymous_function","Object",$$[$0-4],$$[$0-1]]
break;
case 59:
this.$ = ["initializer_list","Object",[]];
break;
case 60:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 61:
this.$ = $$[$0-1];
break;
case 62: case 63: case 64:
this.$ = yytext;
break;
case 65:
this.$ = [$$[$0-2],"[]"];
break;
case 66:
this.$ = [$$[$0-3],$$[$0-1]]
break;
case 68:
this.$ = ["Object", $$[$0]];
break;
case 71:
this.$ = [];
break;
case 75: case 77: case 88:
this.$ = [$$[$0]];
break;
case 80:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 81:
this.$ = ["elif",$$[$0-2],$$[$0]]
break;
case 83:
this.$ = ["else",$$[$0]];
break;
case 84:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 85:
this.$ = ["if",$$[$0-2],$$[$0-1]];
break;
case 86:
this.$ = $$[$0];
break;
case 89:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,11:17,12:$V0,13:$V1,14:5,16:$V2,21:4,23:$V3,28:$V4,29:$V5,30:14,33:9,34:$V6,37:13,38:$V7,39:$V8,43:15,50:16,77:$V9,81:$Va},{1:[3]},{5:[1,23]},o($Vb,[2,3],{6:3,21:4,14:5,33:9,37:13,30:14,43:15,50:16,11:17,4:24,12:$V0,13:$V1,16:$V2,23:$V3,28:$V4,29:$V5,34:$V6,38:$V7,39:$V8,77:$V9,81:$Va}),{22:[1,25]},o($Vc,[2,14]),{24:[1,26]},{24:[1,27]},{24:[1,28]},o($Vc,[2,19]),{16:[1,29]},{24:[1,30]},{16:$Vd,24:$Ve,25:31,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{30:44,81:$Va},{40:[1,46],41:[1,45],44:[1,47],45:[1,48],46:[1,49],47:[1,50],48:[1,51],49:[1,52],51:[1,53]},{40:[1,54]},o($Vk,[2,34]),{15:[1,55]},{24:[1,56]},{24:$Vl,41:$Vm,58:$Vn,81:$Vo},{16:[1,60]},o($Vp,[2,8]),o($Vp,[2,9]),{1:[2,1]},o($Vb,[2,2]),o($Vc,[2,13]),{16:$Vd,24:$Ve,25:61,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$V2,21:62,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},{30:63,81:$Va},{24:[1,64]},{16:$Vd,24:$Ve,25:65,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},o($Vk,[2,23],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),{16:$Vd,24:$Ve,25:79,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},o($VD,[2,50]),o($VD,[2,52],{66:[1,80]}),{24:[1,81]},o($VE,[2,57]),o($VE,[2,58]),{16:$Vd,24:$Ve,25:84,30:41,34:$Vf,41:$Vg,42:[1,82],43:36,50:37,52:33,62:$Vh,65:34,68:83,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:85,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},o($VE,[2,62]),o($VE,[2,63],{41:[1,86]}),o($VE,[2,64]),{24:$Vl},{40:[1,87]},{16:$Vd,24:$Ve,30:41,34:$Vf,41:$Vg,42:[1,88],43:36,50:37,65:90,67:89,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:91,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},o($Vk,[2,28]),o($Vk,[2,29]),{16:$Vd,24:$Ve,25:92,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:93,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:94,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:95,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,30:41,34:$Vf,41:$Vg,43:36,50:37,52:96,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:97,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:[1,98]},{16:$Vd,24:$Ve,25:99,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{42:[1,100]},{16:$VF,37:102,71:101},{16:$Vd,24:$Ve,25:84,26:[1,104],30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,68:105,69:$Vi,70:$Vj,81:$Va},o([22,26,31,32,40,41,42,44,45,46,47,48,49,51,53,54,55,56,57,58,59,60,61,62,63,64,66,73,74],[2,86]),{26:[1,106],51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC},{22:[1,107]},{31:[1,108]},{26:$VG,30:111,35:109,72:110,81:$Va},{26:[1,112],51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC},{16:$Vd,24:$Ve,25:113,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:114,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:115,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:116,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:117,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:118,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:119,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:120,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:121,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:122,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:123,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:124,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:125,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},o($VD,[2,49]),{16:$Vd,24:$Ve,30:41,34:$Vf,41:$Vg,43:36,50:37,52:126,65:34,69:$Vi,70:$Vj,81:$Va},{26:$VG,30:111,35:127,72:110,81:$Va},o($VE,[2,59]),{42:[1,128]},o($VH,[2,75],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC,73:[1,129]}),{26:[1,130],51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC},{16:$Vd,24:$Ve,30:41,34:$Vf,41:$Vg,43:36,50:37,65:90,67:89,69:$Vi,70:$Vj,81:$Va},{16:$Vd,24:$Ve,25:131,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{40:[1,132]},{42:[1,133]},{42:[2,73],74:[1,134]},o($Vk,[2,27],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),o($Vk,[2,30],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),o($Vk,[2,31],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),o($Vk,[2,32],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),o($Vk,[2,33],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),o($Vk,[2,35]),o($Vk,[2,26],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),{17:[1,135],19:[1,136],20:[1,137]},{26:[1,138],51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC},o($VI,[2,65]),{60:[1,139]},{60:[2,77],73:[1,140]},o([16,60,73],$Vo,{41:$Vm,58:$Vn}),o($VE,[2,54]),{26:[1,141]},{16:$V2,17:$VJ,21:144,27:142,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},{16:$Vd,24:$Ve,25:145,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{30:146,81:$Va},{26:[1,147]},{26:[2,70],73:[1,148]},o([26,73],[2,68]),o($Vk,[2,22]),o([22,26,42,53,73],[2,36],{51:$Vq,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),o([22,26,42,53,54,73],[2,37],{51:$Vq,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),o($VK,[2,38],{51:$Vq,61:$Vz,62:$VA,63:$VB,64:$VC}),o($VK,[2,39],{51:$Vq,61:$Vz,62:$VA,63:$VB,64:$VC}),o($VK,[2,40],{51:$Vq,61:$Vz,62:$VA,63:$VB,64:$VC}),o($VK,[2,41],{51:$Vq,61:$Vz,62:$VA,63:$VB,64:$VC}),o($VK,[2,42],{51:$Vq,61:$Vz,62:$VA,63:$VB,64:$VC}),o($VK,[2,43],{51:$Vq,61:$Vz,62:$VA,63:$VB,64:$VC}),o($VL,[2,44],{63:$VB,64:$VC}),o($VL,[2,45],{63:$VB,64:$VC}),o($VL,[2,46],{63:$VB,64:$VC}),o($VD,[2,47]),o($VD,[2,48]),o($VD,[2,51]),{26:[1,149]},o($VE,[2,60]),{16:$Vd,24:$Ve,25:84,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,68:150,69:$Vi,70:$Vj,81:$Va},o($VE,[2,61]),o($Vk,[2,24],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),{16:$Vd,24:$Ve,25:151,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},o([22,26,40,42,51,53,54,55,56,57,58,59,60,61,62,63,64,66,73,74],[2,53]),{16:$Vd,24:$Ve,30:41,34:$Vf,41:$Vg,43:36,50:37,65:90,67:152,69:$Vi,70:$Vj,81:$Va},{7:153,8:154,10:155,11:156,12:$V0,13:$V1},{16:[1,157]},{16:[1,158]},{16:$V2,17:$VJ,21:144,27:159,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},o($VI,[2,66]),{16:$VF,37:102,71:160},o($VE,[2,55]),o($Vc,[2,15]),{4:162,6:3,9:161,11:17,12:$V0,13:$V1,14:5,16:$V2,21:4,23:$V3,28:$V4,29:$V5,30:14,33:9,34:$V6,37:13,38:$V7,39:$V8,43:15,50:16,77:$V9,81:$Va},{22:[1,163]},{22:[1,164],51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC},{26:[1,166],32:[1,165]},{17:[1,167]},{26:$VG,30:111,35:168,72:110,81:$Va},{17:[1,169]},o($VH,[2,74]),o($Vk,[2,25],{51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC}),{42:[2,72]},{18:[1,170]},{18:[2,4]},{8:171,10:155,11:156,12:$V0,13:$V1,18:[2,7]},{36:[1,172]},{17:[1,173]},{17:[1,174]},o($Vc,[2,85],{79:175,75:176,80:177,76:$VM,78:$VN}),{60:[2,76]},{18:[1,180]},{18:[2,5]},o($VO,[2,90]),{16:$V2,21:181,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},{30:182,81:$Va},{16:$V2,17:$VJ,21:144,27:183,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},{4:162,6:3,9:184,11:17,12:$V0,13:$V1,14:5,16:$V2,21:4,23:$V3,28:$V4,29:$V5,30:14,33:9,34:$V6,37:13,38:$V7,39:$V8,43:15,50:16,77:$V9,81:$Va},{26:[2,69]},{4:162,6:3,9:185,11:17,12:$V0,13:$V1,14:5,16:$V2,21:4,23:$V3,28:$V4,29:$V5,30:14,33:9,34:$V6,37:13,38:$V7,39:$V8,43:15,50:16,77:$V9,81:$Va},o($Vc,[2,10]),{18:[2,6]},{16:$VF,37:186},{7:187,8:154,10:155,11:156,12:$V0,13:$V1},{7:188,8:154,10:155,11:156,12:$V0,13:$V1},o($Vc,[2,84]),{24:[1,189]},o($Vc,[2,82]),{16:$V2,17:$VJ,21:144,27:191,30:14,37:13,38:$V7,39:$V8,43:15,50:16,77:[1,190],81:$Va},{24:[2,79]},o($VO,[2,89]),{26:[1,192]},{26:[1,193]},o($Vc,[2,18]),{18:[1,194]},{18:[1,195]},{16:[1,196]},{18:[1,197]},{18:[1,198]},{16:$Vd,24:$Ve,25:199,30:41,34:$Vf,41:$Vg,43:36,50:37,52:33,62:$Vh,65:34,69:$Vi,70:$Vj,81:$Va},{24:[2,78]},o($Vc,[2,83]),{16:$V2,17:$VJ,21:144,27:200,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},{16:$V2,17:$VJ,21:144,27:201,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},o($Vc,[2,20]),o($VE,[2,56]),{24:[1,202]},o($Vc,[2,11]),o($Vc,[2,12]),{26:[1,203],51:$Vq,53:$Vr,54:$Vs,55:$Vt,56:$Vu,57:$Vv,58:$Vw,59:$Vx,60:$Vy,61:$Vz,62:$VA,63:$VB,64:$VC},o($Vc,[2,16]),o($Vc,[2,17]),{26:$VG,30:111,35:204,72:110,81:$Va},{16:$V2,17:$VJ,21:144,27:205,30:14,37:13,38:$V7,39:$V8,43:15,50:16,81:$Va},{26:[1,206]},o($Vc,[2,81],{75:176,80:177,79:207,76:$VM,78:$VN}),{17:[1,208]},o($Vc,[2,80]),{4:162,6:3,9:209,11:17,12:$V0,13:$V1,14:5,16:$V2,21:4,23:$V3,28:$V4,29:$V5,30:14,33:9,34:$V6,37:13,38:$V7,39:$V8,43:15,50:16,77:$V9,81:$Va},{18:[1,210]},o([12,13,18],[2,21])],
defaultActions: {23:[2,1],152:[2,72],154:[2,4],160:[2,76],162:[2,5],168:[2,69],171:[2,6],179:[2,79],190:[2,78]},
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
case 1:return 69
break;
case 2:return 70
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "class"
break;
case 6:return "public"
break;
case 7:return "extends"
break;
case 8:return "implements"
break;
case 9:return "private"
break;
case 10:return "static"
break;
case 11:return "if"
break;
case 12:return "elseif"
break;
case 13:return "else"
break;
case 14:return "return"
break;
case 15:return "as"
break;
case 16:return "while"
break;
case 17:return "foreach"
break;
case 18:return "for"
break;
case 19:return 73
break;
case 20:return 32
break;
case 21:return 66
break;
case 22:return 22
break;
case 23:return ':'
break;
case 24:return 54
break;
case 25:return 53
break;
case 26:return 59
break;
case 27:return 60
break;
case 28:return 57
break;
case 29:return 58
break;
case 30:return 56
break;
case 31:return 55
break;
case 32:return 40
break;
case 33:return 48
break;
case 34:return 63
break;
case 35:return 49
break;
case 36:return 64
break;
case 37:return 47
break;
case 38:return 45
break;
case 39:return 62
break;
case 40:return 44
break;
case 41:return 46
break;
case 42:return 61
break;
case 43:return 51
break;
case 44:return '^'
break;
case 45:return 17
break;
case 46:return 18
break;
case 47:return 74
break;
case 48:return 41
break;
case 49:return 42
break;
case 50:return 24
break;
case 51:return 26
break;
case 52:return 16
break;
case 53:return 5
break;
case 54:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:class\b)/,/^(?:public\b)/,/^(?:extends\b)/,/^(?:implements\b)/,/^(?:private\b)/,/^(?:static\b)/,/^(?:if\b)/,/^(?:elseif\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:as\b)/,/^(?:while\b)/,/^(?:foreach\b)/,/^(?:for\b)/,/^(?:,)/,/^(?:=>)/,/^(?:->)/,/^(?:;)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:===)/,/^(?:!==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\.)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],"inclusive":true}}
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
exports.parser = php_parser;
exports.Parser = php_parser.Parser;
exports.parse = function () { return php_parser.parse.apply(php_parser, arguments); };
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