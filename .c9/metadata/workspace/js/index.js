{"filter":false,"title":"index.js","tooltip":"/js/index.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":19,"column":8},"end":{"row":49,"column":10},"action":"remove","lines":["EliminarUnidad(id){","            axios","            .delete(\"https://truora-rest-daniel-gaviria.c9users.io/unidades/\"+id)","            .then(function(response) {","                if(response.data.Num == 1){","                    window.location.replace(\"unidades.html?state=deleted\") ","                    }  ","        })","            //window.location.replace(\"unidades.html?state=deleted\") ","        },","        EditarUnidad(id){","            window.location.replace(\"edit_unidad.html?id=\"+id)","        },","        mensajeActualizado(){","            var url_string = window.location.href","            var url = new URL(url_string);","            var state = url.searchParams.get(\"state\");","            ","            if(state == \"updated\"){","                this.actualizo = true;","            }","            else if(state == \"saved\"){","                this.guardo = true;","            }","            else if(state == \"error\"){","                this.error = true;","            }","            else if(state == \"deleted\"){","                this.elimino = true;","            }","        },"],"id":2}],[{"start":{"row":14,"column":6},"end":{"row":20,"column":5},"action":"remove","lines":["","    mounted(){","        this.mensajeActualizado()","    },","    methods:{","        ","    }"],"id":3}],[{"start":{"row":12,"column":60},"end":{"row":12,"column":68},"action":"remove","lines":["unidades"],"id":4},{"start":{"row":12,"column":60},"end":{"row":12,"column":61},"action":"insert","lines":["t"]}],[{"start":{"row":12,"column":61},"end":{"row":12,"column":62},"action":"insert","lines":["i"],"id":5}],[{"start":{"row":12,"column":62},"end":{"row":12,"column":63},"action":"insert","lines":["p"],"id":6}],[{"start":{"row":12,"column":63},"end":{"row":12,"column":64},"action":"insert","lines":["o"],"id":7}],[{"start":{"row":12,"column":64},"end":{"row":12,"column":65},"action":"insert","lines":["s"],"id":8}],[{"start":{"row":4,"column":18},"end":{"row":8,"column":23},"action":"remove","lines":["","        actualizo : false,","        guardo: false,","        error: false,","        elimino: false,"],"id":9}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"remove","lines":["//Variable de Enlace App Rest"],"id":10},{"start":{"row":0,"column":0},"end":{"row":5,"column":29},"action":"insert","lines":["/*","Autor: Daniel Eduardo Gaviria Mazuera","Proyecto: Truora - Libro de Recetas","*/","","//Definicion de Instancia VUE"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":12},"end":{"row":8,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1538493609369,"hash":"1ff01b3b5c81c4650749adc5ae7ec6d982ed0a4f"}