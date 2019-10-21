class OscillatorsynthsController < ApplicationController
  before_action :set_oscillatorsynth, only: [:show, :edit, :update, :destroy]

  # GET /oscillatorsynths
  # GET /oscillatorsynths.json
  def index
    @oscillatorsynths = Oscillatorsynth.all
  end

  # GET /oscillatorsynths/1
  # GET /oscillatorsynths/1.json
  def show
  end

  # GET /oscillatorsynths/new
  def new
    @oscillatorsynth = Oscillatorsynth.new
  end

  # GET /oscillatorsynths/1/edit
  def edit
  end

  # POST /oscillatorsynths
  # POST /oscillatorsynths.json
  def create
    @oscillatorsynth = Oscillatorsynth.new(oscillatorsynth_params)

    respond_to do |format|
      if @oscillatorsynth.save
        format.html { redirect_to @oscillatorsynth, notice: 'Oscillatorsynth was successfully created.' }
        format.json { render :show, status: :created, location: @oscillatorsynth }
      else
        format.html { render :new }
        format.json { render json: @oscillatorsynth.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /oscillatorsynths/1
  # PATCH/PUT /oscillatorsynths/1.json
  def update
    respond_to do |format|
      if @oscillatorsynth.update(oscillatorsynth_params)
        format.html { redirect_to @oscillatorsynth, notice: 'Oscillatorsynth was successfully updated.' }
        format.json { render :show, status: :ok, location: @oscillatorsynth }
      else
        format.html { render :edit }
        format.json { render json: @oscillatorsynth.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /oscillatorsynths/1
  # DELETE /oscillatorsynths/1.json
  def destroy
    @oscillatorsynth.destroy
    respond_to do |format|
      format.html { redirect_to oscillatorsynths_url, notice: 'Oscillatorsynth was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_oscillatorsynth
      @oscillatorsynth = Oscillatorsynth.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def oscillatorsynth_params
      params.require(:oscillatorsynth).permit(:frequency, :wave, :detune)
    end
end
