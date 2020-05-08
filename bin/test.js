class HelloWorldPlugin {
  /**
   * 
   * @param {Object} options 用户配制
   */
  constructor (options) {
    this.options = options
  }

  apply(compiler) {
    // compiler.hooks.run.tapAsync('HelloWorldPlugin', (source, target, routesList, cb) => {
    //   let sourcelist = source//JSON.stringify(source, '', '\t')
    //   let targetList = target //JSON.stringify(target, '', '\t')
    //   let routelist = JSON.stringify(routesList, '', '\t')
    //   // console.log(filelist)
    //   compilation.assets['source.json'] = {
    //     source: function() {
    //       return sourcelist
    //     },
    //     size: function() {
    //       return sourcelist.length
    //     }
    //   }
    //   compilation.assets['targetList.json'] = {
    //     source: function() {
    //       return targetList
    //     },
    //     size: function() {
    //       return targetList.length
    //     }
    //   }
    //   compilation.assets['routelist.json'] = {
    //     source: function() {
    //       return routelist
    //     },
    //     size: function() {
    //       return routelist.length
    //     }
    //   }

    //   cb()
    // })

    // compiler.hooks.compilation.tap('Hello World Plugin', compilation => {
    //   compilation.hooks.optimize.tap('Hello World Plugin', () => {
    //     console.log('正在优化资源.');
    //   })
    // })
    
    // emit 当文件转换组装已经完成
    compiler.hooks.emit.tapAsync('HelloWorldPlugin', (compilation, cb) => {
      let filelist = 'In this build:\n\n';
      console.log(' 插件配制内容为 >>>>>>>>>>>', this.options)

      for (let filename in compilation.assets) {
        filelist += `- ${filename}\n`
      }

      compilation.chunks.forEach((chunck, i) => {
        console.log(i)

        chunck.forEachModule(module => {
          console.log(module.files)
          // module.fileDependencies.forEach(filePath => {
          //   console.log(filePath)
          // })
        })
      })

      filelist = '\n\n'+JSON.stringify(compilation.assets, '', '\t')

      compilation.assets['filelist.json'] = {
        source: function() {
          return filelist
        },
        size: function() {
          return filelist.length
        }
      }

      cb()
    })
  }
}

module.exports = HelloWorldPlugin