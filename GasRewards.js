module.exports = async function(context, commands) {
await commands.navigate('https://shop.ak.ecomqa.advancestores.com');	

await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/UserRegistrationForm');
await commands.wait.byTime(1000);

await commands.addText.byXpath('spdg02@yopmail.com','//input[@name=\'email\']');
await commands.addText.byXpath('Advance123','//input[@name=\'password\']');

await commands.wait.byTime(2000);
await commands.click.bySelectorAndWait('.css-1kctkoh');
await commands.wait.byTime(10000);


await commands.measure.start('Gas Rewards');
await commands.navigate('https://shop.ak.ecomqa.advancestores.com/web/SpeedPerksRewards?storeId=10151&catalogId=10051&langId=-1');

await commands.scroll.byPixels('450, 450');
await commands.wait.byTime(100);
await commands.click.bySelectorAndWait('.css-i3dtu5');
await commands.measure.stop();
await commands.wait.byTime(10000);
};
