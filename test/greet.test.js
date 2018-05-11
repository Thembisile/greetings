describe('the Greet Widget', function(){
    it('should return greeting in English', function(){
    var englishGreet = GreetPerson();

    englishGreet.greetingFunction("Shaun", 'English')

    assert.equal('Hello, Shaun', englishGreet.returnGreeting())
    });

    it('should return greeting in Afrikaans', function(){
    var englishGreet = GreetPerson();

    englishGreet.greetingFunction("Tamia", 'Afrikaans')

    assert.equal('Goeie Dag, Tamia', englishGreet.returnGreeting())
    });

    it('should return greeting in IsiXhosa', function(){
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
  it('should count once for the same name entered', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Shaun", 'English')
    greeting.greetingFunction("Shaun", 'Afrikaans')
    greeting.greetingFunction("Shaun", 'IsiXhosa')

    assert.equal(1, greeting.greetCounter());
  })
  it('should count once for the same name despite the letter case', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Shaun", 'English');
    greeting.greetingFunction("shaun", 'English');

    assert.equal(2, greeting.greetCounter());
  })
  it('should return the names in the map', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Thembisile", 'English');
    greeting.greetingFunction("Shaun", 'English');

    assert.deepEqual({ Thembisile: 0, Shaun: 0 }, greeting.nameMap())
  })
  it('should not include the same name twice in the map, only add once', function(){
    var greeting = GreetPerson();

    greeting.greetingFunction("Damon", 'IsiXhosa')
    greeting.greetingFunction("Damon", 'English')
    greeting.greetingFunction("Damon", 'Afrikaans')
    greeting.greetingFunction("Tamia", 'Afrikaans')

    assert.deepEqual({Damon: 0, Tamia: 0}, greeting.nameMap())
  })
});
