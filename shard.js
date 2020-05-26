const { ShardingManager } = require('discord.js');

module.exports = {

  version: require("./package.json").version,

  start(op){

const manager = new ShardingManager('./'+op.filename, {
    totalShards: op.totalshard||"auto",   
    token: op.token
});

manager.spawn();

manager.on('shardCreate', (shard) => console.log(`🎉 | Shard ${shard.id} launched`));

  }
}
