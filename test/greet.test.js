describe('the Greet Widget', function(){
    it('should return greeting in English and the name', function(){
    var englishGreet = GreetPerson();

    englishGreet.greetingFunction("Shaun", 'English')

    assert.equal('Hello, Shaun', englishGreet.returnGreeting())
    });

    it('should return greeting in Afrikaans and the name', function(){
    var englishGreet = GreetPerson();

    englishGreet.greetingFunction("Tamia", 'Afrikaans')

    assert.equal('Goeie Dag, Tamia', englishGreet.returnGreeting())
    });

    it('should return greeting in IsiXhosa and the name', function(){
    var englishGreet = GreetPerson();

    englishGreet.greetingFunction("Iviwe", 'IsiXhosa')

    assert.equal('Molo, Iviwe', englishGreet.returnGreeting())
  });
  it('should be able to count different names in the same language', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Tamia", 'IsiXhosa');
    greeting.greetingFunction("Siya", 'IsiXhosa');
    greeting.greetingFunction("Odwa", 'IsiXhosa');

    assert.equal(3, greeting.greetCounter())
  })
  it('should count once for the same name entered despite the language', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Shaun", 'English')
    greeting.greetingFunction("Shaun", 'English')
    greeting.greetingFunction("Shaun", 'IsiXhosa')

    assert.equal(1, greeting.greetCounter());
  })
  it('should count once for the same name despite the letter case', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Shaun".toLowerCase(), 'English');
    greeting.greetingFunction("shaun", 'English');

    assert.equal(1, greeting.greetCounter());
  })
  it('sets the names and add them to a map and return the map', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Thembisile", 'English');
    greeting.greetingFunction("Shaun", 'IsiXhosa');

    assert.deepEqual({ Thembisile: 0, Shaun: 0 }, greeting.nameMap())
  })
  it('should not include the same name twice in the map, only add once', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Damon", 'IsiXhosa')
    greeting.greetingFunction("Damon", 'English')
    greeting.greetingFunction("Damon", 'Afrikaans')
    greeting.greetingFunction("Tamia", 'English')

    assert.deepEqual({Damon: 0,Tamia: 0}, greeting.nameMap())
  })
});
