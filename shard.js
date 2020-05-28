const { ShardingManager } = require('discord.js');

module.exports = {

  version: require("./package.json").version,

  start(op){
if (process.version.slice(1).split('.')[0] < 12) return console.log('Node 12.0.0 or higher is required.');

const manager = new ShardingManager(op.filename, {
    totalShards: op.totalshard||"auto",   
    token: op.token
});

if(op.spawn){
manager.spawn(op.spawn);
manager.on('shardCreate', (shard) => console.log(`🎉 | Shard ${shard.id} launched`));
} else {

manager.spawn();
manager.on('shardCreate', (shard) => console.log(`🎉 | Shard ${shard.id} launched`));
}

  }
}
