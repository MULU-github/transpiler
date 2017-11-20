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
var wolfram_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[5,8],$V2=[2,45],$V3=[1,11],$V4=[14,19],$V5=[1,21],$V6=[1,23],$V7=[1,18],$V8=[1,19],$V9=[1,22],$Va=[1,24],$Vb=[1,25],$Vc=[1,33],$Vd=[1,29],$Ve=[1,27],$Vf=[1,32],$Vg=[1,34],$Vh=[1,36],$Vi=[1,37],$Vj=[1,38],$Vk=[1,39],$Vl=[1,40],$Vm=[1,41],$Vn=[1,42],$Vo=[1,43],$Vp=[1,44],$Vq=[1,45],$Vr=[1,46],$Vs=[1,47],$Vt=[5,8,14,19,23,27,28,29,30,31,32,33,34,35,36,37,38,44,46],$Vu=[2,39],$Vv=[1,50],$Vw=[1,51],$Vx=[5,8,14,19],$Vy=[5,8,14,19,23],$Vz=[2,16],$VA=[14,46],$VB=[1,80],$VC=[5,8,14,19,23,27,28,29,30,31,32,33,34,44,46],$VD=[5,8,14,19,23,27,28,29,30,31,32,33,34,35,36,44,46],$VE=[1,97],$VF=[8,14,23];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements":4,"EOF":5,"statements":6,"statements_":7,";":8,"function":9,"statement":10,"IDENTIFIER":11,"[":12,"parameters":13,"]":14,":=":15,"bracket_statements":16,"While":17,"e":18,",":19,"if_statement":20,"statement_with_semicolon":21,"(":22,")":23,"If":24,"=":25,"Return":26,"||":27,"&&":28,"!=":29,"==":30,"<=":31,"<":32,">=":33,">":34,"+":35,"-":36,"*":37,"/":38,"!":39,"parentheses_expr":40,"exprs":41,"[[":42,"access_arr":43,"]]":44,"{":45,"}":46,"NUMBER":47,"STRING_LITERAL":48,"parameter":49,"PARAMETER":50,":":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:";",11:"IDENTIFIER",12:"[",14:"]",15:":=",17:"While",19:",",22:"(",23:")",24:"If",25:"=",26:"Return",27:"||",28:"&&",29:"!=",30:"==",31:"<=",32:"<",33:">=",34:">",35:"+",36:"-",37:"*",38:"/",39:"!",42:"[[",44:"]]",45:"{",46:"}",47:"NUMBER",48:"STRING_LITERAL",50:"PARAMETER",51:":"},
productions_: [0,[3,2],[6,1],[4,3],[4,1],[7,3],[7,1],[9,6],[10,6],[10,1],[10,1],[16,5],[16,1],[20,8],[21,3],[21,4],[21,1],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,2],[18,2],[18,1],[40,3],[40,4],[40,4],[40,2],[40,3],[40,3],[40,1],[40,1],[40,1],[49,3],[49,1],[13,3],[13,1],[13,0],[43,3],[43,1],[41,3],[41,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2:
this.$ = ["statements",$$[$0]];
break;
case 3: case 5:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 4: case 6: case 44: case 47:
this.$ =
 [$$[$0]];
break;
case 7:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0]];
break;
case 8:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 9: case 31:
this.$ = $$[$0];
break;
case 10:
this.$ = ["semicolon",$$[$0]];
break;
case 11:
this.$ = ["statements",[$$[$0-3]].concat($$[$0-1])];
break;
case 12:
this.$ = ["statements",[$$[$0]]]
break;
case 13:
this.$ = ["if",$$[$0-5],$$[$0-3],["else",$$[$0-1]]];
break;
case 14:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 15:
this.$ = ["return",$$[$0-1]];
break;
case 16:
this.$ = ["return",$$[$0]];
break;
case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 27:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 26:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 28:
this.$ = ["/",$$[$0-2],$$[$0]];
break;
case 29:
this.$ = ["-",$$[$0]];
break;
case 30:
this.$ = ["!", [".",$$[$0]]];
break;
case 32:
this.$= ["function_call",$$[$0-2],[]];
break;
case 33:
this.$= ["function_call",$$[$0-3],$$[$0-1]];
break;
case 34:
this.$ = ["access_array",$$[$0-3],$$[$0]];
break;
case 35:
this.$ = ["initializer_list","Object",[]];
break;
case 36:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 37:
this.$ = ["parentheses",$$[$0-1]];
break;
case 38:
this.$ = [yytext];
break;
case 39: case 40:
this.$ = yytext;
break;
case 41:
this.$ = ["default_parameter", "Object", $$[$0-2].substring(0,($$[$0-2].length)-1)],$$[$0];
break;
case 42:
this.$ = ["Object", $$[$0].substring(0,($$[$0].length)-1)];
break;
case 43: case 46: case 48:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 45:
this.$ = []
break;
case 49:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,9:3,11:$V0},{1:[3]},{5:[1,5],8:[1,6]},o($V1,[2,4]),{12:[1,7]},{1:[2,1]},{9:8,11:$V0},{13:9,14:$V2,49:10,50:$V3},o($V1,[2,3]),{14:[1,12]},{14:[2,44],19:[1,13]},o($V4,[2,42],{51:[1,14]}),{15:[1,15]},{13:16,14:$V2,49:10,50:$V3},{11:$V5,18:17,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{10:28,11:$Vc,16:26,17:$Vd,18:35,20:30,21:31,22:$Ve,24:$Vf,26:$Vg,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{14:[2,43]},o($V4,[2,41],{27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs}),{11:$V5,18:48,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:49,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},o($Vt,[2,31]),o($Vt,$Vu,{12:$Vv,42:$Vw}),{11:$V5,18:54,22:$V6,36:$V7,39:$V8,40:20,41:53,45:$V9,46:[1,52],47:$Va,48:$Vb},{11:$V5,18:55,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},o($Vt,[2,38]),o($Vt,[2,40]),o($V1,[2,7]),{10:56,11:$Vc,17:$Vd,18:57,20:30,21:31,22:$V6,24:$Vf,26:$Vg,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},o($Vx,[2,12]),{12:[1,58]},o($Vy,[2,9]),o($Vy,[2,10]),{12:[1,59]},o([5,8,14,19,23,27,28,29,30,31,32,33,34,35,36,37,38],$Vu,{12:$Vv,25:[1,60],42:$Vw}),{12:[1,61]},o($Vy,$Vz,{27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs}),{11:$V5,18:62,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:63,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:64,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:65,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:66,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:67,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:68,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:69,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:70,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:71,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:72,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:73,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},o($Vt,[2,29]),o($Vt,[2,30]),{11:$V5,14:[1,74],18:54,22:$V6,36:$V7,39:$V8,40:20,41:75,45:$V9,47:$Va,48:$Vb},{11:$V5,18:77,22:$V6,36:$V7,39:$V8,40:20,43:76,45:$V9,47:$Va,48:$Vb},o($Vt,[2,35]),{46:[1,78]},o($VA,[2,49],{19:[1,79],27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs}),{23:$VB,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs},{8:[1,81]},{8:$Vz,23:$VB,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs},{11:$V5,18:82,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:83,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:84,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{11:$V5,18:85,22:$V6,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},o([5,8,14,19,23,27,44,46],[2,17],{28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o([5,8,14,19,23,27,28,44,46],[2,18],{29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o($VC,[2,19],{35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o($VC,[2,20],{35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o($VC,[2,21],{35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o($VC,[2,22],{35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o($VC,[2,23],{35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o($VC,[2,24],{35:$Vp,36:$Vq,37:$Vr,38:$Vs}),o($VD,[2,25],{37:$Vr,38:$Vs}),o($VD,[2,26],{37:$Vr,38:$Vs}),o($Vt,[2,27]),o($Vt,[2,28]),o($Vt,[2,32]),{14:[1,86]},{44:[1,87]},{19:[1,88],27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs,44:[2,47]},o($Vt,[2,36]),{11:$V5,18:54,22:$V6,36:$V7,39:$V8,40:20,41:89,45:$V9,47:$Va,48:$Vb},o($Vt,[2,37]),{7:90,10:91,11:$Vc,17:$Vd,18:35,20:30,21:31,22:$V6,24:$Vf,26:$Vg,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{19:[1,92],27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs},{19:[1,93],27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs},o($Vy,[2,14],{27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs}),{14:[1,94],27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr,38:$Vs},o($Vt,[2,33]),o($Vt,[2,34]),{11:$V5,18:77,22:$V6,36:$V7,39:$V8,40:20,43:95,45:$V9,47:$Va,48:$Vb},o($VA,[2,48]),{8:$VE,23:[1,96]},o($VF,[2,6]),{6:98,7:99,10:91,11:$Vc,17:$Vd,18:35,20:30,21:31,22:$V6,24:$Vf,26:$Vg,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{10:28,11:$Vc,16:100,17:$Vd,18:35,20:30,21:31,22:$Ve,24:$Vf,26:$Vg,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},o($Vy,[2,15]),{44:[2,46]},o($Vx,[2,11]),{10:101,11:$Vc,17:$Vd,18:35,20:30,21:31,22:$V6,24:$Vf,26:$Vg,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{14:[1,102]},{8:$VE,14:[2,2]},{19:[1,103]},o($VF,[2,5]),o($Vy,[2,8]),{10:28,11:$Vc,16:104,17:$Vd,18:35,20:30,21:31,22:$Ve,24:$Vf,26:$Vg,36:$V7,39:$V8,40:20,45:$V9,47:$Va,48:$Vb},{14:[1,105]},o($Vy,[2,13])],
defaultActions: {5:[2,1],16:[2,43],95:[2,46]},
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
case 1:return 47
break;
case 2:return 48
break;
case 3:return "$"
break;
case 4:return "block"
break;
case 5:return "typeof"
break;
case 6:return "do"
break;
case 7:return 24
break;
case 8:return "case"
break;
case 9:return 'default'
break;
case 10:return 26
break;
case 11:return 'yield'
break;
case 12:return 17
break;
case 13:return 'switch'
break;
case 14:return 'break'
break;
case 15:return 'for'
break;
case 16:return 'var'
break;
case 17:return 'of'
break;
case 18:return 19
break;
case 19:return 8
break;
case 20:return '.'
break;
case 21:return ":="
break;
case 22:return 51
break;
case 23:return 28
break;
case 24:return 27
break;
case 25:return 33
break;
case 26:return 34
break;
case 27:return 31
break;
case 28:return 32
break;
case 29:return 30
break;
case 30:return 29
break;
case 31:return "!"
break;
case 32:return 25
break;
case 33:return '*='
break;
case 34:return 37
break;
case 35:return '/='
break;
case 36:return 38
break;
case 37:return '%'
break;
case 38:return '-='
break;
case 39:return '--'
break;
case 40:return 36
break;
case 41:return '++'
break;
case 42:return '+='
break;
case 43:return 35
break;
case 44:return '^'
break;
case 45:return 45
break;
case 46:return 46
break;
case 47:return 12
break;
case 48:return 14
break;
case 49:return 22
break;
case 50:return 23
break;
case 51:return 50
break;
case 52:return 11
break;
case 53:return 5
break;
case 54:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:block\b)/,/^(?:typeof\b)/,/^(?:do\b)/,/^(?:If\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:Return\b)/,/^(?:yield\b)/,/^(?:While\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::=)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:!)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
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
exports.parser = wolfram_parser;
exports.Parser = wolfram_parser.Parser;
exports.parse = function () { return wolfram_parser.parse.apply(wolfram_parser, arguments); };
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