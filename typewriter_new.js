class Typewriter {
  _initialIteration = true;

  constructor({
    words = [],
    target = null,
    spellSpeed = 400,
    deleteSpeed = 200,
    deleteDelay = 2000,
    iterationDelay = 3000,
    initialDelay = 2000,
    sentenceEnd = false
  }) {
    if (!target) {
      throw new Error(
        "Please provide a valid target element for rendering the typewriter."
      );
    }

    this._words = words.map(word => word + (sentenceEnd ? ". " : " "));
    this._spellSpeed = spellSpeed;
    this._deleteSpeed = deleteSpeed;
    this._target = target;
    this._deleteDelay = deleteDelay;
    this._iterationDelay = iterationDelay;
    this._initialDelay = Math.max(0, initialDelay - spellSpeed);
  }

  static getCounter(counter, words) {
    return counter < words.length ? counter : 0;
  }

  init(counter = 0) {
    counter = Typewriter.getCounter(counter, this._words);

    const word = this._words[counter];

    if (this._initialIteration) {
      setTimeout(
        () => this._spell(word, word.length, counter),
        this._initialDelay
      );
      this._intitialIteration = false;
    } else {
      this._spell(word, word.length, counter);
    }
  }

  _spell(word, currentLength, counter) {
    setTimeout(() => {
      this._target.innerHTML += word.charAt(word.length - currentLength);

      if (currentLength - 1 > 0) {
        return this._spell(word, currentLength - 1, counter);
      }

      setTimeout(() => {
        this._remove(word.length, counter);
      }, this._deleteDelay);
    }, this._spellSpeed);
  }

  _remove(currentLength, counter) {
    setTimeout(() => {
      this._target.textContent = this._target.textContent.slice(0, -1);

      if (currentLength - 1 > 0) {
        return this._remove(currentLength - 1, counter);
      }

      setTimeout(() => {
        this.init(++counter);
      }, this._iterationDelay);
    }, this._deleteSpeed);
  }
}
